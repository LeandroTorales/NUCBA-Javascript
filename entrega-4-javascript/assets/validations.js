const isEmpty = (input) => !input.length;

const checkNumberInput = () => {
  let valid = false;
  const inputValue = inputNumber.value;
  if (isEmpty(inputValue)) {
    showError(inputNumber, "* Se tiene que ingresar un numero");
    console.log("error");
  } else if (inputValue <= 0 || inputValue > 1154) {
    showError(inputNumber, "*Numero invalido, no se pueden usar numeros negativos o demasiado elevados");
    console.log("error 2");
  } else {
    clearError(inputNumber);
    console.log("Numero de ID del pokemon elegido:", inputValue);
    valid = true;
  }
  return valid;
};

const isValidForm = () => {
  return checkNumberInput();
};
