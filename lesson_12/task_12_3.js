const task = document.querySelector("[data-input-task]");
const btnAdd = document.querySelector("[data-add-task]");
const ol = document.querySelector(".task-list > ol");

btnAdd.addEventListener("click", function () {
  const taskItem = task.value;
  if (taskItem === "") {
    alert("Enter your task!");
    return;
  }
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.classList.add("list-item");

  div.textContent = taskItem;
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger");
  btnDelete.textContent = "delete";
  div.append(btnDelete);
  li.appendChild(div);
  ol.appendChild(li);
  task.value = "";

  btnDelete.addEventListener("click", function () {
    console.log("click remove");
    ol.removeChild(li);
  });
});
