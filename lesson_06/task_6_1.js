// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const message = prompt("Enter yor strinng");
const chars = prompt("Enter some chars for removing");
const arrChars = chars !== null ? chars.split("") : [];

// function foo(string: string, arr: Array<string>): string
function removeSymbol(str, arr) {
  if (str === null || arr === null) return "";
  let cuttedString = "";
  for (let i = 0; i < str.length; i++) {
    let isNotEqual = true;
    for (let k = 0; k < arr.length; k++) {
      if (str[i] === arr[k]) {
        isNotEqual = false;
      }
    }
    if (isNotEqual) {
      cuttedString += str[i];
    }
  }
  return cuttedString;
}

const result = removeSymbol(message, arrChars);
alert(result);
console.log(result);
