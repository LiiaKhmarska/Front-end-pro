const APIKEY = "f406134034804108a16a15a0cc0ff5db";

const selectWrapper = document.querySelector(".select-city-wrapper");
const vidgetWrapper = document.querySelector(".show-weather");

function createSelect() {
  const fragment = document.createDocumentFragment();
  const label = createElement({
    tag: "label",
    content: "Get forecast: ",
    attributes: {
      for: "city-select",
    },
  });
  const select = createElement({
    tag: "select",
    attributes: {
      id: "city-select",
      class: "form-select",
    },
  });
  const firstOption = createElement({
    tag: "option",
    content: "Select city",
    attributes: {
      disabled: "disabled",
      selected: "selected",
      value: "",
    },
  });
  select.appendChild(firstOption);
  cityList.forEach((item) => {
    const option = createElement({
      tag: "option",
      content: item.name,
      attributes: {
        value: item.id,
      },
    });
    select.appendChild(option);
  });
  fragment.append(label);
  fragment.append(select);
  selectWrapper.append(fragment);
}

createSelect();

function createButton() {
  const btn = createElement({
    tag: "button",
    content: "Show weather",
    attributes: {
      class: "btn btn-info",
    },
  });
  selectWrapper.appendChild(btn);
}
createButton();

selectWrapper.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.previousElementSibling.value;
    if (id === "") return;
    getWeather(id);
  }
});

async function getWeather(id) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIKEY}`
  );
  const data = await response.json();

  const temperature =
    data.main.temp > 273
      ? "+" + Math.round(data.main.temp - 273)
      : Math.round(data.main.temp - 273);
  const feelTemperature =
    data.main["feels_like"] > 273
      ? "+" + Math.round(data.main["feels_like"] - 273)
      : Math.round(data.main["feels_like"] - 273);
  const maxTemperature =
    data.main["temp_max"] > 273
      ? "+" + Math.round(data.main["temp_max"] - 273)
      : Math.round(data.main["temp_max"] - 273);
  const minTemperature =
    data.main["temp_min"] > 273
      ? "+" + Math.round(data.main["temp_min"] - 273)
      : Math.round(data.main["temp_min"] - 273);

  weatherData = {
    id: id,
    name: data.name,
    maxTemperature: maxTemperature,
    minTemperature: minTemperature,
    temperature: temperature,
    feelTemperature: feelTemperature,
    cloudiness: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
  showVidget(weatherData);
}
