//Funcion si el input esta vacio
const isEmpty = (input) => !input.length;

//Manejo de errores
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

//Setear el background de la card dependiendo si es correcto o incorrecto el id
const setBackgroundCard = (quantity) => {
  return quantity > 0 && quantity <= 3 ? "green-card" : quantity > 3 && quantity <= 5 ? "violet-card" : false;
};
