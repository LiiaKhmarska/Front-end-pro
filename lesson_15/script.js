const form = document.forms.form;
const taskList = document.querySelector("[data-tasks]");
const clearTaskBtn = document.querySelector("[data-clear-tasks]");
let tasks = getTasks();

renderTaskList();

function getTasks() {
  const value = localStorage.getItem("tasks") || "[]";
  return JSON.parse(value);
}

function setTasks(tasks) {
  const tasksJson = JSON.stringify(tasks);
  localStorage.setItem("tasks", tasksJson);
}
// Добавляем дело в список-массив
function addTask(task) {
  tasks.push(task);
  setTasks(tasks);
  renderTaskList();
}
// Выводим список дел
function renderTaskList() {
  //Очистка списка
  while (taskList.firstElementChild) {
    taskList.firstElementChild.remove();
  }
  // Вывод обновленного списка
  for (let task of tasks) {
    renderTaskElement(taskList, task.descrition, task.done);
  }
  // Показать-скрыть кнопку Удалить все
  tasks.length
    ? clearTaskBtn.classList.remove("d-none")
    : clearTaskBtn.classList.add("d-none");
}
//отрисовываем - создаем каждый элемент списка
function renderTaskElement(container, content, done) {
  const fragment = document.createDocumentFragment();
  const li = createElement({
    tag: "li",
    attributes: { class: "todo-item" },
  });
  const checkBox = done
    ? createElement({
        tag: "input",
        attributes: { type: "checkbox", checked: true },
      })
    : createElement({
        tag: "input",
        attributes: { type: "checkbox" },
      });

  const span = done
    ? createElement({
        tag: "span",
        content: content,
        attributes: {
          class: "todo-item__description completed-task",
        },
      })
    : createElement({
        tag: "span",
        content: content,
        attributes: {
          class: "todo-item__description",
        },
      });
  const removeBtn = createElement({
    tag: "button",
    content: "Видалити",
    attributes: { class: "todo-item__delete" },
  });
  fragment.prepend(checkBox);
  fragment.append(span);
  removeBtn.dataset.btn = "delete-task";
  fragment.append(removeBtn);
  li.append(fragment);
  container.append(li);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  task = {
    descrition: form.task.value,
    done: false,
  };
  addTask(task);
  event.target.reset();
});

// Удаляем одно дело по нажатию
taskList.addEventListener("click", function (event) {
  if (event.target.dataset.btn === "delete-task") {
    handlerDeleteTask(event.target);
  }
  // Добавляе сделано дело или нет и обновляем ЛС
  if (event.target.type === "checkbox") {
    handlerCheckedTask(event.target);
  }
});

function handlerDeleteTask(task) {
  tasks = tasks.filter(
    (item) => item.descrition !== task.previousElementSibling.textContent
  );
  setTasks(tasks);
  renderTaskList();
}

function handlerCheckedTask(task) {
  const checkedTask = tasks.find(
    (item) => item.descrition === task.nextElementSibling.textContent
  );
  checkedTask.done = task.checked;
  task.nextElementSibling.classList.toggle("completed-task");
  setTasks(tasks);
}

clearTaskBtn.addEventListener("click", (event) => {
  tasks.length = 0;
  localStorage.clear();
  event.target.classList.add("d-none");
  while (taskList.firstElementChild) {
    taskList.firstElementChild.remove();
  }
});

window.addEventListener("storage", (event) => {
  const newValue = event.newValue ?? "[]";
  tasks = JSON.parse(newValue);
  renderTaskList();
});
