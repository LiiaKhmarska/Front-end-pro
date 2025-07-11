// Реалізувати таймер відліку:

// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

const timerWripper = document.querySelector(".timer-wripper");
const timer = document.querySelector(".timer");
let time = 212; //Количество секунд для таймера

const firstTimer = setInterval(showTimer, 1000);

function showTimer() {
  timer.textContent = prittyTimer(time);
  time--;
  if (time < 0) {
    clearInterval(firstTimer);
  }
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
