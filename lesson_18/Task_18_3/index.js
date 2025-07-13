// Реалізувати зворотний таймер відліку:
// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

// '*' Додати можливість стартувати декілька таймерів одночасно
// є інпут який приймає початок таймера
// є кнопка start яка стартує таймер
// контейнер в якому відображаються таймери
// кожний новий таймер додається знизу

// '**' Додати кнопку stop яка зупиняє таймер

const container = document.querySelector(".main");
let timerList = [];

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
  const id = new Date().getTime();
  // обертка для нового таймера
  const timerWrapper = createElement({
    content: "input time",
    attributes: {
      class: "container timer-wrapper",
      "data-id": id,
    },
  });
  // инпут для таймера
  const timerValue = createElement({
    tag: "input",
    attributes: {
      type: "time",
      class: "timer-value",
      "data-id": id,
    },
  });
  timerWrapper.append(timerValue);
  //div  для отображение таймер
  const timerDesk = createElement({
    attributes: {
      class: "col",
      "data-show-timer": "",
      "data-id": id,
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
      "data-id": id,
    },
  });
  timerWrapper.append(btnStart);

  const btnStop = createElement({
    tag: "button",
    content: "STOP",
    attributes: {
      class: "btn btn-danger btn-hide",
      "data-btn": "stop",
      "data-id": id,
    },
  });
  timerWrapper.append(btnStop);

  const btnContinue = createElement({
    tag: "button",
    content: "CONTINUE",
    attributes: {
      class: "btn btn-primary btn-hide",
      "data-btn": "continue",
      "data-id": id,
    },
  });
  timerWrapper.append(btnContinue);
  const btnDelete = createElement({
    tag: "button",
    content: "X",
    attributes: {
      class: "btn btn-del",
      "data-btn": "delete",
      "data-id": id,
    },
  });
  timerWrapper.append(btnDelete);
  fragment.append(timerWrapper);
  container.append(fragment);
}

container.addEventListener("click", function (event) {
  let time = 0;
  const id = event.target.dataset.id;

  const div = document.querySelector(`div[data-id="${id}"]`);

  const btnStop = document.querySelector(
    `div[data-id="${id}"] >[data-btn=stop]`
  );
  const btnStart = document.querySelector(
    `div[data-id="${id}"] >[data-btn=start]`
  );
  const btnContinue = document.querySelector(
    `div[data-id="${id}"] >[data-btn=continue]`
  );

  switch (event.target.dataset.btn) {
    case "start":
      {
        const timerValue = document.querySelector(
          `input[data-id="${id}"]`
        ).value;
        if (!timerValue) return;
        btnStart.classList.toggle("btn-hide");
        btnStop.classList.toggle("btn-hide");
        time = getSeconds(timerValue);
        const timerDesk = div.children[1];
        startTimer(timerDesk, time, id);
      }
      break;
    case "stop":
      {
        btnStop.classList.toggle("btn-hide");
        btnContinue.classList.toggle("btn-hide");
        stopTimer(id);
      }
      break;
    case "delete":
      {
        div.remove();
        if (time) deleteTimer(id);
      }
      break;
    case "continue": {
      console.log("cont");
      console.log(timerList);
      const time = timerList.find((item) => item.id === id).time;
      const timerDesk = div.children[1];
      btnContinue.classList.toggle("btn-hide");
      btnStop.classList.toggle("btn-hide");
      deleteTimer(id);
      startTimer(timerDesk, time, id);
    }
  }
});

function deleteTimer(id) {
  const timerID = timerList.find((item) => item.id === id).timerID;
  clearInterval(timerID);
  timerList = timerList.filter((item) => item.id !== id);
}

function stopTimer(id) {
  const timerID = timerList.find((item) => item.id === id).timerID;
  clearInterval(timerID);
}

function startTimer(timerDesk, time, id) {
  const timerID = setInterval(() => {
    timerList.find((item) => item.id === id).time = time;
    showTimer(timerDesk);
  }, 1000);
  timerList.push({ id: id, timerID: timerID, time: time });

  function showTimer(timerDesk) {
    timerDesk.textContent = showFormatedTime(time--);
    if (time < 0) {
      clearInterval(timerID);
      timerList = timerList.filter((item) => item.id !== id);
      timerDesk.parentNode.children[3].style.visibility = "hidden";
    }
  }
}

function getSeconds(strTime) {
  const getTimeArray = strTime.split(":");
  return +getTimeArray[0] * 60 + +getTimeArray[1];
}

function showFormatedTime(value) {
  const minutes =
    value < 60
      ? "00"
      : Math.floor(value / 60)
          .toString()
          .padStart(2, 0);
  const seconds = (value - minutes * 60).toString().padStart(2, 0);
  return `${minutes} : ${seconds}`;
}
