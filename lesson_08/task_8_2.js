// Сходи
// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

let ladder = {
  step: 0,
  up: function () {
    // підніматиме вас на одну сходинку
    this.step++;
    return this;
  },
  down: function () {
    // опускатиме вас на одну сходинку
    if (this.step <= 0) {
      console.log("This is the lowest floor");
      return this;
    }
    this.step--;
    return this;
  },
  showStep: function () {
    // показує поточну сходинку
    console.log("Current step is ", this.step);
    return this;
  },
};

// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

// ladder.up().up().down().showStep(); // 1

ladder.up().up().down().showStep().down().down().showStep().up().showStep(); // 1
