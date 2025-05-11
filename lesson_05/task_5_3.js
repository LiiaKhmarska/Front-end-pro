//Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let isInt = true;
while (isInt) {
  const num = prompt("Enter an integer: ", "8");
  console.group("You have entered: ", num);

  if (num === null) {
    break;
  } else if (num < 1) {
    isInt = confirm(
      "Your number is not in the range! Would you like try again? "
    );
  } else if (!Number.isInteger(+num)) {
    isInt = confirm("Your number is not integer, would you like try again?");
  } else {
    for (i = 1; i < 101 && i * i <= num; i++) {
      console.log("number: ", i, "\t number squared: ", i * i);
    }
    isInt = false;
  }
  console.groupEnd;
}
