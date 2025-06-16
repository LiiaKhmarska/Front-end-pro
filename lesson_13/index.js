// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
// Поля:
// Name - обовьязкове текстове поле
// Message - текстове поле не меньше 5 символів
// Phone number - обовьязкове поле типу phone. З початком на +380
// Email - email обовьязково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
// Під час помилки показувати її під полем.

import advice from "./advice.js";

const form = document.forms.helper;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("TODO: implement validation and i want to see result obj");
  const data = {};
  const allForms = Array.from(form.elements);
  let warn = "";
  allForms.forEach((item) => {
    if (item.type === "submit") return;
    if (item.value === "" || !advice[item.name].regex.test(item.value)) {
      item.nextElementSibling.textContent = advice[item.name]["incorrect"];
      item.nextElementSibling.style.color = "red";
      warn += `Field ${item.name} is empty or incorrect!\n`;
    }

    data[item.name] = item.value;
  });
  alert(warn);
  console.log("Result object:", data);
});

form.addEventListener("focusin", function (event) {
  focusHandler(event, true);
});

form.addEventListener("focusout", function (event) {
  focusHandler(event, false);
});

function focusHandler(event, isCorrect) {
  if (event.target.type === "submit") return;
  const fieldName = event.target.name;
  const nextSibling = event.target.nextElementSibling;
  if (isCorrect) {
    nextSibling.textContent = advice[fieldName].correct ?? "";
    nextSibling.style.color = "";
  } else {
    nextSibling.textContent = "";
    if (!advice[fieldName].regex.test(event.target.value)) {
      nextSibling.textContent = advice[fieldName].incorrect;
      nextSibling.style.color = "red";
    }
  }
}
