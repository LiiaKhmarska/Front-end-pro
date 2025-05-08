const alertMassege = {
  age: "",
  city: "",
  sport: "",
};

const birthdayYear = prompt("Введіть свій рік народження", "1990");
const city = prompt("В якому місті Ви живите?", "Dnipro");
const sport = prompt("Який Ваш улюблений вид спорту?", "football");

if (birthdayYear !== null && birthdayYear !== "") {
  const age = 2025 - +birthdayYear;
  let years = "";
  switch (age % 10) {
    case 1:
      years = "рік";
      break;
    case 2:
    case 3:
    case 4:
      years = "роки";
      break;
    default:
      years = "років";
      break;
  }
  alertMassege.age = `Ваш вік ${age} ${years}!`;
} else alert("Шкода, що Ви не захотіли ввести свій(ю) дату народження");

if (city !== null && city !== "") {
  switch (city) {
    case "Kyiv":
    case "Київ":
      alertMassege.city = "Ви живите у столиці України";
      break;
    case "Вашингтон":
    case "Washington":
      alertMassege.city = "Ви живите у столиці США";
      break;
    case "London":
    case "Лондон":
      alertMassege.city = "Ви живите у столиці Великої Британії";
      break;
    default:
      alertMassege.city = `Ви живите у місті ${city}`;
      break;
  }
} else alert("Шкода, що Ви не захотіли ввести своє місто");

if (sport !== null && sport !== "") {
  switch (sport) {
    case "football":
    case "футбол":
      alertMassege.sport = "Круто! Хочеш стати Криштіано Рональдо?";
      break;
    case "box":
    case "бокс":
      alertMassege.sport = "Круто! Хочеш стати Мохамед Алі?";
      break;
    case "basketbal":
    case "баскетбол":
      alertMassege.sport = "Круто! Хочеш стати Майклом Джорданом?";
      break;
    default:
      alertMassege.sport = `Круто, що Вам подобається ${sport}!`;
      break;
  }
} else alert("Шкода, що Ви не захотіли ввести свій(ю) улюблений вид спорту");

if (
  alertMassege.age !== "" ||
  alertMassege.city !== "" ||
  alertMassege.sport !== ""
) {
  alert(`
    ${alertMassege.age}
    ${alertMassege.city}
    ${alertMassege.sport}`);

  console.log(alertMassege);
}
