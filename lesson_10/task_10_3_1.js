// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const book = {
  contacts: [
    {
      name: "Serhii",
      phone: "+380999999999",
      email: "example@email.com",
    },
  ],
  find: function (name) {
    // youre awesome code here
    return (
      this.contacts.find((item) => item.name === name) ?? `${name} не знайдено`
    );
  },
  add: function (name, phone, email) {
    // youre awesome code here
    if (this.contacts.find((item) => item.name === name)) {
      console.log("Контакт вже існує");
      return;
    }
    const contact = {
      name: name,
      phone: phone,
      email: email,
    };
    this.contacts.push(contact);
  },
};

console.log(book.find("Serhii"));
console.log(book.find("Max"));

book.add("John", "+380000", "john@snow.com");
console.log(book.contacts);

console.log(book.find("John"));
book.add("John", "+380000", "john@snow.com");
book.add("Alex", "+380000", "alex@snow.com");
console.log(book.contacts);
