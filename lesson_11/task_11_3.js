// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення, отримане випадковим чином (Math.random)
const div = document.querySelector(".random-img");

const btn = document.querySelector(".random-btm");
btn.addEventListener("click", showRandomImage);

function showRandomImage() {
  div.textContent = "";
  const img = document.createElement("img");
  img.src = `./images/${randomNum()}.jpg`;
  div.insertAdjacentElement("afterbegin", img);
}

showRandomImage();

function randomNum(min = 1, max = 9) {
  return Math.floor(Math.random() * (max - min)) + min;
}
