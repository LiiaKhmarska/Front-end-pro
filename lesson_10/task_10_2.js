// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEnevNumbers_1(arr) {
  return arr.filter((item) => item % 2 === 0);
}

const even_1 = getEnevNumbers_1(arr);
console.log(even_1); // [2, 4, 6, 8]

/******************************************* */
function getEnevNumbers_2(arr) {
  let i = 0;
  const evenNumber = [];
  arr.forEach((elem) => {
    if (elem % 2 === 0) evenNumber.push(elem);
  });
  return evenNumber;
}

const even_2 = getEnevNumbers_2(arr);
console.log(even_2); // [2, 4, 6, 8]

/******************************************* */

function getEnevNumbers_3(arr) {
  let i = 0;
  return arr.reduce((evenNumber, item) => {
    if (item % 2 === 0) evenNumber[i++] = item;
    return evenNumber;
  }, []);
}

const even_3 = getEnevNumbers_3(arr);
console.log(even_3); // [2, 4, 6, 8]
