const form = document.forms.form;
const taskList = document.querySelector("[data-tasks]");
const clearTaskBtn = document.querySelector("[data-clear-tasks]");

let tasks = [];
console.log("start LS:", localStorage.getItem("tasks"));
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

// function showTasks() {
if (tasks.length) {
  tasks.forEach((task) => {
    addTask(taskList, task);
  });
  clearTaskBtn.classList.remove("d-none");
}
// }

// showTasks();

function addTask(container, content) {
  const fragment = document.createDocumentFragment();
  const li = createElement({
    tag: "li",
    attributes: { class: "todo-item" },
  });

  const checkBox = createElement({
    tag: "input",
    attributes: { type: "checkbox" },
  });
  const span = createElement({
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

taskList.addEventListener("click", function (event) {
  if (event.target.dataset.btn === "delete-task") {
    console.log(event.target.dataset.data);
    event.target.parentElement.remove();
    tasks = tasks.filter(
      (item) => item !== event.target.previousElementSibling.textContent
    );
    console.log("task after remove one: ", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log();
    if (!tasks.length) {
      localStorage.clear();
      clearTaskBtn.classList.add("d-none");
    }
  }
  if (event.target.type === "checkbox") {
    event.target.checked
      ? event.target.nextElementSibling.classList.add("completed-task")
      : event.target.nextElementSibling.classList.remove("completed-task");
  }
});

let tmp = [];
form.elements.task.addEventListener("change", (event) => {
  if (event.target.value) {
    tmp.push(event.target.value);
  }
});

form.addEventListener("submit", function (event) {
  tasks.push(tmp.pop());
  event.preventDefault();
  if (tasks.length) {
    addTask(taskList, tasks[tasks.length - 1]);
    clearTaskBtn.classList.remove("d-none");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  event.target.reset();
});

clearTaskBtn.addEventListener("click", (event) => {
  tasks.length = 0;
  localStorage.clear();
  event.target.classList.add("d-none");
  while (taskList.firstElementChild) {
    taskList.firstElementChild.remove();
  }
});

window.addEventListener("storage", (event) => {
  const newValue = event.newValue;
  while (taskList.firstElementChild) {
    taskList.firstElementChild.remove();
  }
  clearTaskBtn.classList.add("d-none");
  if (newValue) {
    tasks = JSON.parse(newValue);
    tasks.forEach((task) => {
      addTask(taskList, task);
    });
    clearTaskBtn.classList.remove("d-none");
  }
});
