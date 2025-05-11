const exchangeCurrency = {
  usd: {
    rate: 41,
    sign: "$",
  },
  euro: {
    rate: 43.5,
    sign: "€",
  },
  gbp: {
    rate: 55.2,
    sign: "£",
  },
};

let isChange = true;

while (isChange) {
  const currency = prompt(
    `Choose currency: ${Object.keys(exchangeCurrency).join(" or ")} `,
    "usd"
  );
  if (currency === null) break;
  if (currency === "") {
    alert("You have not enter any sign! Please try again!");
    continue;
  }

  if (Object.keys(exchangeCurrency).includes(currency)) {
    console.group(
      "%c------Currency rate of " + currency + "-----------",
      "font-size:15px"
    );
    for (let i = 10; i <= 100; i += 10) {
      console.log(
        `${i}${exchangeCurrency[currency].sign} = ${
          i * exchangeCurrency[currency].rate
        }₴`
      );
    }
    console.groupEnd;
  } else {
    console.log("%cYour currency: " + currency, "color: red;");
    alert("Sorry, we don't have such currency!");
  }

  isChange = confirm(
    "Would you like calculate the exchange rate of another currency?"
  );
}
