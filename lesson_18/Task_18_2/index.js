// Реалізувати зворотний таймер відліку:
// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

// '*' Додати можливість стартувати декілька таймерів одночасно
// є інпут який приймає початок таймера
// є кнопка start яка стартує таймер
// контейнер в якому відображаються таймери
// кожний новий таймер додається знизу

const container = document.querySelector(".main");

// Формировани кноки добавления еаймера
const btnAddTimer = createElement({
  tag: "button",
  content: "Add timer",
  attributes: {
    class: "btn btn-primary",
    "data-btn": "add",
  },
});
container.append(btnAddTimer);

btnAddTimer.addEventListener("click", addHandler);

// Добавление нового фрагмента для таймера
function addHandler() {
  const fragment = document.createDocumentFragment();
  // обертка для нового таймера
  const timerWrapper = createElement({
    content: "Enter time",
    attributes: {
      class: "container timer-wrapper",
    },
  });
  // инпут для таймера
  const timerValue = createElement({
    tag: "input",
    attributes: {
      type: "time",
      class: "timer-value",
    },
  });
  timerWrapper.append(timerValue);
  //div  для отображение таймер
  const timerDesk = createElement({
    attributes: {
      class: "col",
      "data-show-timer": "",
    },
  });
  timerWrapper.append(timerDesk);

  //кнопка для старта
  const btnStart = createElement({
    tag: "button",
    content: "START",
    attributes: {
      class: "btn btn-success",
      "data-btn": "start",
    },
  });
  timerWrapper.append(btnStart);
  fragment.append(timerWrapper);
  container.append(fragment);
}

container.addEventListener("click", function (event) {
  if (event.target.dataset.btn === "start") {
    const start = event.target;
    const timerValue = start.parentNode.children[0].value;
    if (!timerValue) return;
    const time = getSeconds(timerValue);
    const timerDesk = start.previousSibling;
    start.parentNode.classList.add("inprogress");
    startTimer(timerDesk, time);
  }
});

function startTimer(timerDesk, time) {
  const firstTimer = setInterval(() => {
    showTimer(timerDesk);
  }, 1000);

  function showTimer(timerDesk) {
    timerDesk.textContent = prittyTimer(time--);
    if (time < 0) {
      clearInterval(firstTimer);
      timerDesk.parentNode.classList.add("ready");
      timerDesk.parentNode.classList.remove("inprogress");
    }
  }
}

function getSeconds(strTime) {
  const getTimeArray = strTime.split(":");
  return +getTimeArray[0] * 60 + +getTimeArray[1];
}

function prittyTimer(value) {
  const minutes =
    value < 60
      ? "00"
      : Math.floor(value / 60)
          .toString()
          .padStart(2, 0);
  const seconds = (value - minutes * 60).toString().padStart(2, 0);
  return `${minutes} : ${seconds}`;
}
