// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const initialArray = [1, 3, 4, 6, 2, 5, 7];

function removeElement1(arr, item) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== item) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const finalArray = removeElement1(initialArray, 4);
console.log("start: ", initialArray);
console.log("final: ", finalArray); // Результат: [1, 3, 6, 2, 5, 7]
