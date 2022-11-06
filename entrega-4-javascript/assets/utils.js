const form = document.getElementById("form");
const containerResults = document.querySelector(".container__result");
const inputNumber = document.getElementById("input");
const inputValue = inputNumber.value;

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};
const clearError = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  const error = formField.querySelector("small");
  error.textContent = "";
};
