function Student(name, surname, birthDate, assessments = []) {
  this.name = name;
  this.surname = surname;
  this.birthDate = birthDate;
  this.assessments = assessments;
  this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.birthDate;
};

Student.prototype.getAverage = function () {
  const sumAssessments = this.assessments.reduce(
    (accum, item) => (accum += item),
    0
  );
  return Math.round(sumAssessments / this.assessments.length);
};

Student.prototype.present = function () {
  const index = this.attendance.findIndex((elem) => elem === null);
  if (index === -1) return this;
  this.attendance[index] = true;
  return this;
};

Student.prototype.absent = function () {
  const index = this.attendance.findIndex((elem) => elem === null);
  if (index === -1) return this;
  this.attendance[index] = false;
  return this;
};

Student.prototype.summary = function () {
  const rating = this.getAverage();
  let present = 0;
  let absent = 0;
  this.attendance.forEach((item) => {
    item ? present++ : absent++;
  });
  const attending = Math.round((present / (present + absent)) * 100) / 100;
  console.log("attending", attending);
  if (rating >= 90 && attending >= 0.9) {
    return "Молодець!";
  } else if (rating < 90 && attending < 0.9) {
    return "Редиска!";
  }
  return "Добре, але можна краще ";
};

const student1 = new Student("Меламори", "Блимм", 1999, [10, 93, 92, 82]);
console.log("Student 1");
console.log(student1);
console.log("age: ", student1.getAge());
console.log("rating: ", student1.getAverage());
student1.absent().present().present();
console.log(student1.summary());

const student2 = new Student("Макс", "Фрай", 1985, [70, 27, 76, 55, 99, 100]);
console.log("Student 2");
console.log(student2);
console.log("age: ", student2.getAge());
console.log("rating: ", student2.getAverage());
student2.present().present().present().present().present().present();
console.log(student2.summary());

const student3 = new Student("Техи", "Шекк", 2005, [95, 97, 96, 95, 100]);
console.log("Student 3");
console.log(student3);
console.log("age: ", student3.getAge());
console.log("rating: ", student3.getAverage());
student3.present().absent().present().present().present().absent();
console.log(student3.summary());

const student4 = new Student(
  "Шурф",
  "Лонли-Локли",
  1990,
  [100, 100, 96, 99, 100]
);
console.log("Student 4");
console.log(student4);
console.log("age: ", student4.getAge());
console.log("rating: ", student4.getAverage());
student4.present().present().present().present().present();
console.log(student4.summary());
