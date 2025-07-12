function showVidget({
  id,
  name,
  temperature,
  cloudiness,
  icon,
  feelTemperature,
  maxTemperature,
  minTemperature,
}) {
  while (vidgetWrapper.firstElementChild) {
    vidgetWrapper.firstElementChild.remove();
  }
  vidgetWrapper.style.visibility = "visible";
  const fragment = document.createDocumentFragment();

  const cityName = createElement({
    tag: "h2",
    content: name,
    attributes: {
      class: "h2",
    },
  });
  fragment.append(cityName);

  const dataWrap = createElement({
    attributes: {
      class: "data-container",
    },
  });

  const tempratureWrap = createElement({
    attributes: {
      class: "tempratura-container",
    },
  });

  const temp = createElement({
    tag: "p",
    content: temperature + "°",
    attributes: {
      class: "temp-value",
    },
  });
  const cloud = createElement({
    tag: "p",
    content: cloudiness,
    attributes: {
      // class: "temp-value",
    },
  });

  const maxmin = createElement({
    tag: "p",
    content: "↑" + maxTemperature + "° /  ↓" + minTemperature + "°",
    attributes: {
      // class: "temp-value",
    },
  });

  const feel = createElement({
    tag: "p",
    content: "feel as " + feelTemperature + "°",
    attributes: {
      // class: "temp-value",
    },
  });

  tempratureWrap.appendChild(temp);
  tempratureWrap.appendChild(cloud);
  tempratureWrap.appendChild(maxmin);
  tempratureWrap.appendChild(feel);
  dataWrap.append(tempratureWrap);

  const img = createElement({
    tag: "img",
    attributes: {
      src: icon,
    },
  });
  dataWrap.append(img);
  fragment.append(dataWrap);
  const reloadBtn = createElement({
    tag: "button",
    content: "Reload",
    attributes: {
      class: "btn btn-success",
    },
  });
  reloadBtn.addEventListener("click", () => getWeather(id));
  fragment.append(reloadBtn);
  vidgetWrapper.append(fragment);
}
