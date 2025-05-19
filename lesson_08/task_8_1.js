// Сходи
// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

let ladder = {
  step: 0,
  up: function () {
    // підніматиме вас на одну сходинку
    this.step++;
  },
  down: function () {
    // опускатиме вас на одну сходинку
    if (this.step <= 0) {
      console.log("This is the lowest floor");
      return;
    }
    this.step--;
  },
  showStep: function () {
    // показує поточну сходинку
    console.log("Current step is ", this.step);
  },
};
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

ladder.up();

ladder.up();

ladder.down();

ladder.showStep(); // 1
