// Дано тризначне число, яке надае користувач, потрибно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

const userNum = prompt("Enter a three-digit number:");
console.log("You have entered: ", userNum);

if (userNum === null) console.log("Enter your number again");
else {
  const num = userNum.trim();
  if (num === "") console.log("Empty string");
  else if (isNaN(+num)) console.log("It is not a number");
  else if (num.length !== 3) console.log("Number is not three-digit");
  else {
    console.log("num1:", num[0], " num2:", num[1], " num3: ", num[2]);
    if (num[0] === num[1] && num[1] === num[2]) {
      console.log("All numbers are equal!");
    } else {
      if (num[0] === num[1] || num[1] === num[2] || num[0] === num[2]) {
        console.log("Two identical numbers found");
      } else console.log("All numbers are different");
    }
  }
}
