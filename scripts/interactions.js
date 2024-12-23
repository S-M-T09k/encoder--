function inputValidation(...inputFields) {
  inputFields.forEach((inputField) => {
    if (inputField.value === "") {
      inputField.setAttribute("placeholder", "field cannot be empty");
    }
  });
}

export { inputValidation };
