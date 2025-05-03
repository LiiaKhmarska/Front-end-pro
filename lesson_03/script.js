// Task 3.1 Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log
console.group("Task 1");
let a = 3;
console.log(a, typeof a);
let b = "str";
console.log(b, typeof b);
let c = 2025n;
console.log(c, typeof c);
let d = true;
console.log(d, typeof d);
let e = null;
console.log(e, typeof e);
let f = undefined;
console.log(f, typeof f);
let g = Symbol("id");
console.log(g, typeof g);
let obj = { name: "Friend" };
console.log(obj, typeof obj);
console.log(typeof console.log);
console.groupEnd;

// Task 3.2 Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки);
console.group("Task 2");
const str1 = prompt("Input first row: ");
const str2 = prompt("Input second row: ");
const str3 = prompt("Input third row: ");
console.log(`You have entered:
    First row ${str1} 
    Second row: ${str2}
    Third row: ${str3}`);

console.groupEnd;

// Task 3.3 Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
// 10369 1 0 3 6 9
console.group("Task 3");
const num = 4052025;
const numToStr = num.toString();
console.log("start number: ", num);
let out = "";
for (let i = 0; i < numToStr.length; i++) {
  out += numToStr[i] + " ";
}
console.log("out 1: ", out);

const numToStr2 = num.toString().split("").join(" ");
console.log("out 2: ", numToStr2);
console.groupEnd;
