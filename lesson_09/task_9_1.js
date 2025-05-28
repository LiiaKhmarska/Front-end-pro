// Дізнатись суму всіх зарплат користувачів:
// Об'єкт може містити невідому кількість департаментів та співробітників

const conmpany = {
  sales: [
    { name: "Jhon", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "Bob", salary: 1200 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
      { name: "Max", salary: 600 },
      { name: "Test" },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function totalSales(company) {
  let sum = 0;
  if (Array.isArray(company)) {
    for (let item of company) {
      sum += item.salary ?? 0;
    }
    return sum;
  } else {
    for (let key in company) {
      sum += totalSales(company[key]);
    }
    return sum;
  }
}

const total = totalSales(conmpany);
console.log("TOTAL: ", total);
