// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const checkedArray = [{}, 1, 2, 3, 4, 5, 6, "string", null];

function countAverage(arr) {
  let count = 0;
  let summa = 0;
  for (let item of arr) {
    if (typeof item === "number") {
      count++;
      summa += item;
    }
  }
  console.log("count: ", count, "\nsumma", summa);
  return summa / count;
}

const result = countAverage(checkedArray);

console.log(result);
