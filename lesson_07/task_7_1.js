// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4

function makeSumma() {
  let summa = 0;
  return function (a = 0) {
    summa += a;
    return summa;
  };
}

const sum = makeSumma();
console.log(sum(4));
console.log(sum(100));
