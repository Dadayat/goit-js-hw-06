const inputLine = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
const fontSizeControl = ({ currentTarget }) =>
  (textSpan.style.fontSize = `${currentTarget.value}px`);

inputLine.addEventListener("input", fontSizeControl);
