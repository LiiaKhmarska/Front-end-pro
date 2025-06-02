// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.

const simpleUser = {
  name: "Liia",
  age: 18,
  city: "Dnipro",
  getUserInfo: function () {
    console.log(
      `My name is ${this.name}. I am ${this.age}. I live in ${this.city}`
    );
  },
};
console.group("1-st part");
simpleUser.getUserInfo();
console.groupEnd;

// ** Створіть функцію конструктор на базі якої будуть створені обʼєкти користувачів

function User(name, surname) {
  // youre awesome code here
  this.name = name;
  this.surname = surname;
}

User.prototype.getInfo = function () {
  return {
    name: this.name,
    surname: this.surname,
  };
};

console.group("2-d part");
const user1 = new User("Liia", "Khmarska");
const user2 = new User("Max", "Mad");
console.log(user1.getInfo());
console.log(user2.getInfo());

console.groupEnd;
