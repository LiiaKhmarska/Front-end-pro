// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

let userName = prompt("What is your name?", "John");
if (userName === null) userName = "Stranger";
alert(`Hello, ${userName}! How are you?`);
