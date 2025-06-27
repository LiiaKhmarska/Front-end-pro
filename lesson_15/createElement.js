function createElement({ tag = "div", content, attributes } = {}) {
  const element = document.createElement(tag);

  if (content) {
    typeof content === "string"
      ? (element.textContent = content)
      : element.append(content);
  }

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  return element;
}
