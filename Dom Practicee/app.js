const nameInput = document.getElementById("input__name");
const emailInput = document.getElementById("input__email");
const phoneInput = document.getElementById("input__phone");

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
const saveToLocalstorage = () => {
  localStorage.setItem("agenda", JSON.stringify(agenda));
};

const saveData = () => {
  agenda = [
    ...agenda,
    {
      id: agenda.length + 1,
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
    },
  ];
};

//Validaciones simples
const checkearTextoInput = (input) => {
  let valid = false;
  const content = nameInput.value.trim();
  if (isEmpty(content)) {
    showError(nameInput, "Rellenalo por favor");
  } else {
    clearError(input);
    valid = true;
  }
  return valid;
};

const checkearEmailInput = () => {
  let valid = false;
  const content = emailInput.value.trim();
  if (isEmpty(content)) {
    showError(content, "El email es obligatorio");
  } else if (!isPhoneValid(content)) {
    showError(content, "El email no es valido");
  } else {
    clearError(content);
    valid = true;
  }
  return valid;
};

const checkearPhoneInput = () => {
  let valid = false;
  const content = phoneInput.value.trim();
  if (isEmpty(content)) {
    showError(content, "El celular es obligatorio");
  } else if (!isPhoneValid(content)) {
    showError(content, "El celular ingresado no es valido");
  } else {
    clearError(content);
    valid = true;
  }
  return valid;
};

const isValidForm = () => {
  return checkearTextoInput(nameInput) && checkearEmailInput(emailInput) && checkearPhoneInput();
};
isValidForm();

const init = () => {
  window.addEventListener("DOMContentLoaded", afdafa);
};
