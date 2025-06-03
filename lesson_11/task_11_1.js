const table = document.querySelector("table");

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  if (i === 1) tr.classList.add("caption");
  for (let k = 1; k <= 10; k++) {
    const td = document.createElement("td");
    if (k === 1) td.classList.add("caption");
    td.textContent = i * k;
    tr.append(td);
  }
  table.append(tr);
}
