// Створіть HTML-сторінку з декількома кнопками.
// Ваше завдання - створити обробник подій для батьківського елементу, який відслідковуватиме кліки на всіх кнопках.
// Покроковий план:
// Створіть HTML-елементи: батьківський контейнер з декількома вкладеними кнопками.
// Додайте обробник подій до батьківського контейнера, який відслідковуватиме кліки.
// Після кліку на будь-якій кнопці, виведіть повідомлення про те, яка саме кнопка була клікнута.

const parentElement = document.querySelector("#parent-buttons");
const out = document.querySelector(".out");
parentElement.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.tagName === "BUTTON") {
    out.textContent = "You have clicked on " + event.target.textContent;
  }
});
