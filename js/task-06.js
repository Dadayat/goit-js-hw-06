const inputText = document.getElementById('validation-input');
inputText.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputText.dataset.length);
  const inputValueLength = Number(inputText.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  } else {
    inputText.classList.remove('valid');
    inputText.classList.add('invalid');
  }
}