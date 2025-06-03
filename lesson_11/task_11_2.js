// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір
const buttonToggle = document.querySelector(".btn > button");
const text = document.querySelector("#text-color-change");
buttonToggle.onclick = function () {
  text.classList.toggle("clicked");
};
