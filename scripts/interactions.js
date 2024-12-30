function inputIsEmpty(...inputFields) {
  for (const inputField of inputFields) {
    if (inputField.value === "") {
      inputField.setAttribute("placeholder", "field cannot be empty");

      inputField.style.borderColor = "red";
      setTimeout(() => {
        inputField.style.borderColor = "";
      }, 2000);

      return true;
    }
  }

  return false;
}

function inputIsHexadecimal(...inputFields) {
  for (const inputField of inputFields) {
    if (!isHexadecimal(inputField.value)) {
      inputField.setAttribute(
        "placeholder",
        "field must be hexadecimal to decode"
      );

      inputField.style.borderColor = "red";
      setTimeout(() => {
        inputField.style.borderColor = "";
      }, 2000);

      console.log(inputField.id, "must be hexadecimal");
      return false;
    }
  }

  return true;
}

const isAscii = (str) => /^[\x00-\x7F]+$/.test(str);
const isHexadecimal = (str) => /^[A-F0-9]+$/i.test(str);

export { inputIsEmpty, inputIsHexadecimal };
