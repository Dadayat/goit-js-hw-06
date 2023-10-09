const nameInp = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    nameOut.textContent = currentTarget.value.trim();
  } else {
    nameOut.textContent = "Anonymous";
  }
};

nameInp.addEventListener("input", getInputValue);
