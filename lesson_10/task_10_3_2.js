// //
// ** Створіть функцію конструктор на базі якої будуть створені обʼєкти книг контактів

const contacts = [
  {
    id: 11,
    name: "Serhii",
    phone: "+380999999999",
    email: "example@email.com",
  },
];

function Contact({ id, name, phone, email }) {
  this.id = id;
  this.name = name;
  this.phone = phone;
  this.email = email;
  // youre awesome code here
}

function Book(contacts) {
  this.contacts = contacts;
}

Book.prototype.find = (id) => {
  // youre awesome code here
  return contacts.find((item) => item.id === id);
};

Book.prototype.add = function (contact) {
  // youre awesome code here
  this.contacts.push(new Contact(contact));
};

Book.prototype.remove = function (id) {
  // youre awesome code here
  const index = this.contacts.findIndex((item) => item.id === id);
  return this.contacts.splice(index, 1);
};

Book.prototype.update = function (id, key, val) {
  // youre awesome code here
  const updateItem = this.contacts.find((item) => item.id === id);
  return (updateItem[key] = val);
};

const mappedContacts = contacts.map((el) => {
  // youre awesome code here
  return new Contact(el);
});

const book = new Book(mappedContacts);

console.log("New book: ", book);
const newContact = {
  id: 22,
  name: "Liia",
  phone: "+38501234567",
  email: "some@email.com",
};
book.add(newContact);
book.add({
  id: 32,
  name: "Chiara",
  phone: "+38501234227",
  email: "chiara@email.com",
});
console.log("Book after add items: ", book);
book.update(32, "phone", "+381111111111");
console.log("Find item with id=11: ", book.find(11));

book.remove(22);
console.log("Book remove add items: ", book);
