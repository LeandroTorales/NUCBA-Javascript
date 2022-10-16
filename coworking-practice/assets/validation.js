const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const dateInput = document.getElementById("date");
const hourInput = document.getElementById("hour");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const radioInputs = document.querySelectorAll('input[name="quantity"]');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const aboutInput = document.getElementById("message");

const checkTextInput = (input) => {
  let valid = false;
  const content = input.value.trim();

  if (isEmpty(content)) {
    showError(input, "* El campo es obligatorio");
  } else {
    clearError(input);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const emailValue = emailInput.value.trim();

  if (isEmpty(emailValue)) {
    showError(emailInput, "El email es obligatorio");
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, "El email no es valido");
  } else {
    clearError(emailInput);
    valid = true;
  }
  return valid;
};


const checkPhone = () => {
  let valid = false;
  const phoneValue = phoneInput.value.trim();

  if (isEmpty(phoneValue)) {
    showError(phoneInput, "*El celular es obligatorio");
  } else if (!isPhoneValid(phoneValue)) {
    showError(phoneInput, "*El celular ingresado no es correcto");
  } else {
    clearError(phoneInput);
    valid = true;
  }
  return valid;
};

const checkDate = () => {
  let valid = false;
  const dateValue = dateInput.value.trim();
  if (!isValidDate(dateValue)) {
    showError(dateInput, "La fecha ingresada no es valida");
  } else {
    clearError(dateInput);
    valid = true;
  }
  return valid;
};

const isValidForm = () => {
  const isValidName = checkTextInput(nameInput);
  const isValidSurname = checkTextInput(surnameInput);
  const isValidDate = checkDate(dateInput);
  const isValidEmail = checkEmail(emailInput);
  const isValidPhone = checkPhone(phoneInput);

  return isValidName && isValidSurname && isValidDate && isValidEmail && isValidPhone;
};
