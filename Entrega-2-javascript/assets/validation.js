const inputNumber = document.getElementById("input__number");

/* Se checkea que no se ingrese una cadena vacia */
/* Se checkea que el numero que se ingresa sea del 1 al 5, si no es correcto, lanza error */
const checkNumberInput = () => {
  let valid = false;
  const inputValue = inputNumber.value;
  if (isEmpty(inputValue)) {
    showError(inputNumber, "* Se tiene que ingresar un numero");
  } else if (!inputValue > 0 && !inputValue <= 5) {
    showError(inputNumber, "* El numero tiene que ser del 1 al 5");
  } else {
    clearError(inputNumber);
    valid = true;
  }
  return valid;
};

const isValidForm = () => {
  return checkNumberInput(inputNumber);
};
