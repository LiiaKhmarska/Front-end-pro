// Створити програму за таким алгоритмом:

// Спитати у користувача число N, за допомогою prompt()
// З'ясувати, чи просто воно (простим називається число, понад 1, що не має інших дільників, крім 1 і себе).
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113 , 127, 131, 137, 139, 149 ...
// Вивести в alert() повідомлення про те чи просте число чи ні
// Спитати у користувача чи хоче він ще обрахувати якесь число
// Якщо так, то перейти на перший крок програми, якщо ні завершити програму
// Завершати програму кожен раз коли користувач тисне закрити.
let isPrime = true;
let newRound = true;

// if (!checkNumber <= 2) {
//   for (let i = 2; i < checkNumber; i++) {
//     if (checkNumber % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// console.log(
//   "First: \n",
//   isPrime
//     ? `The number ${checkNumber} is prime`
//     : `The number ${checkNumber} is composite`
// );

while (newRound) {
  const inputNumber = prompt("Input integer number: ", "");

  if (inputNumber === null) {
    newRound = false;
    break;
  }

  const checkNumber = Number(inputNumber);
  if (isNaN(checkNumber)) {
    newRound = confirm("You entered not a number, try again?");
    if (newRound) continue;
    else break;
  }

  if (!checkNumber <= 2) {
    for (let k = 2; k <= Math.sqrt(checkNumber); k++) {
      if (checkNumber % k === 0) {
        isPrime = false;
        break;
      }
    }
  }

  alert(
    isPrime
      ? `The number ${checkNumber} is prime`
      : `The number ${checkNumber} is composite`
  );

  newRound = confirm("Do you want to check other number?");
}
