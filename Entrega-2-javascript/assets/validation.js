const inputNumber = document.getElementById("input__number");
const pizzasArray = [
  { id: 1, nombre: "Muzzarella", ingredientes: ["Salsa de tomate", "queso muzzarella", "aceitunas", "aceite de oliva"], precio: 400 },
  {
    id: 2,
    nombre: "Fugazzeta",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "cebolla", "jamon", "aceitunas", "aceite de oliva"],
    precio: 600,
  },
  {
    id: 3,
    nombre: "Jamon y morrones",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "jamon", "morron", "aceitunas", "aceite de oliva"],
    precio: 500,
  },
  { id: 4, nombre: "New York", ingredientes: ["Salsa de tomate", "queso muzzarella", "pepperoni", "aceite de oliva"], precio: 350 },
  { id: 5, nombre: "Napolitana", ingredientes: ["Salsa de tomate", "fior di latte", "albahaca", "aceite de oliva"], precio: 650 },
  { id: 6, nombre: "Ultra power", ingredientes: ["Salsa de tomate", "queso cheddar", "albondigas", "aceitunas", "aceite de oliva"], precio: 900 },
];

/* Se checkea que no se ingrese una cadena vacia */
/* Se checkea que el numero que se ingresa sea del 1 al 5, si no es correcto, lanza error */
const checkNumberInput = () => {
  let valid = false;
  const inputValue = inputNumber.value;
  if (isEmpty(inputValue)) {
    showError(inputNumber, "* Se tiene que ingresar un numero");
  } else if (!inputValue > 0 && !inputValue <= 6) {
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
