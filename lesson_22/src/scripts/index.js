import { createElement } from "./createElement";
import { images } from "../images/images";

export function createSlider() {
  const cotainer = document.querySelector(".container");
  const sliderLine = document.querySelector(".slider-line");
  const navDots = document.querySelector(".nav-dots");

  const totalSlides = images.length;
  let currentIndex = 0;

  const btnPrev = document.createElement("button");
  btnPrev.textContent = "<<  Privious";
  btnPrev.style.visibility = "hidden";
  cotainer.prepend(btnPrev);

  const btnNext = document.createElement("button");
  btnNext.textContent = "Next  >>";
  cotainer.append(btnNext);

  btnPrev.addEventListener("click", function () {
    if (currentIndex > 0) {
      document
        .querySelector(`[data-key='${currentIndex}']`)
        .classList.remove("active-dot");
      currentIndex--;
      document
        .querySelector(`[data-key='${currentIndex}']`)
        .classList.add("active-dot");
      showImage();
      if (currentIndex === 0) {
        this.style.visibility = "hidden";
      }
    }
  });

  btnNext.addEventListener("click", function () {
    if (currentIndex < totalSlides - 1) {
      btnPrev.style.visibility = "visible";
      document
        .querySelector(`[data-key='${currentIndex}']`)
        .classList.remove("active-dot");
      currentIndex++;
      document
        .querySelector(`[data-key='${currentIndex}']`)
        .classList.add("active-dot");
      showImage();
      if (currentIndex === totalSlides - 1) {
        this.style.visibility = "hidden";
      }
    }
  });

  function showImage() {
    if (sliderLine.childElementCount) {
      sliderLine.removeChild(sliderLine.childNodes[0]);
    }
    const img = createElement({
      tag: "img",
      attributes: { src: `images/${images[currentIndex]}` },
    });
    sliderLine.append(img);
  }

  showImage();

  function createDotNavigation(dotsQuantity) {
    const dotFragment = document.createDocumentFragment();
    for (let i = 0; i < dotsQuantity; i++) {
      const dot = createElement({ tag: "div", attributes: { class: "dot" } });
      dot.dataset.key = i;
      if (i === 0) {
        dot.classList.add("active-dot");
      }
      dotFragment.append(dot);
    }
    return dotFragment;
  }

  navDots.append(createDotNavigation(totalSlides));

  navDots.addEventListener("click", function (event) {
    if (event.target.className === "dot") {
      document.querySelector(".active-dot").classList.remove("active-dot");
      event.target.classList.add("active-dot");
      currentIndex = +event.target.dataset.key;
      checkVisibility(currentIndex);
      showImage();
    }
  });

  function checkVisibility(index) {
    switch (index) {
      case totalSlides - 1:
        btnNext.style.visibility = "hidden";
        btnPrev.style.visibility = "visible";
        break;
      case 0:
        btnPrev.style.visibility = "hidden";
        btnNext.style.visibility = "visible";
        break;
      default:
        btnPrev.style.visibility = "visible";
        btnNext.style.visibility = "visible";
    }
  }
}
