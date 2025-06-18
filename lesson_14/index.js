const cotainer = document.querySelector(".container");
const sliderLine = document.querySelector(".slider-line");
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
  sliderLine.innerHTML = "";
  let img = document.createElement("img");
  img.src = `./images/${images[currentIndex]}`;
  img.alt = `funny dog ${currentIndex}`;
  sliderLine.append(img);
}
showImage();

function createDot() {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  return dot;
}

const navDots = document.querySelector(".nav-dots");

function createDotNavigation(dotsQuantity) {
  for (let i = 0; i < dotsQuantity; i++) {
    const dot = createDot();
    dot.setAttribute("data-key", i);
    if (i === 0) {
      dot.classList.add("active-dot");
    }
    navDots.appendChild(dot);
    dot.onclick = function () {
      document.querySelector(".active-dot").classList.remove("active-dot");
      this.classList.add("active-dot");
      currentIndex = i;
      showImage();
      checkVisibility(currentIndex);
    };
  }
}

createDotNavigation(totalSlides);

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
