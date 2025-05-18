// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

function myFunc(getNumber, checkNumber) {
  for (let i = 0; i < 10; i++) {
    let num = getNumber();
    if (num === null) return;
    if (isNaN(+num)) continue;
    if (checkNumber(num, i)) continue;
    else break;
  }
}

function getValue() {
  let num = prompt("Enter a number greater than 100");
  return num;
}

function checkNumber(num, i) {
  if (+num > 100 || i === 9) {
    console.log("Your number is %c" + num, "font-weight: bold;");
    return false;
  }
  return true;
}

myFunc(getValue, checkNumber);
