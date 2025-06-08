// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).
const buttonGetLink = document.querySelector("[data-get-link]");
const buttonGoToLink = document.querySelector("[data-go-to-link]");
let url = "";
buttonGetLink.addEventListener("click", function () {
  url = prompt("Enter any url");
});

buttonGoToLink.addEventListener("click", function () {
  if (url === "" || url === null) {
    alert("You don't enter any url");
    return;
  }
  window.location.href = url.includes("https://") ? url : "https://" + url;
});
