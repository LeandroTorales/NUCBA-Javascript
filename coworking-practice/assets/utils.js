// MANEJO DE FECHAS
const getNextDay = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

const getTomorrowDate = () => {
  let year = getNextDay().getFullYear();
  let month = getNextDay().getMonth() + 1;
  let day = getNextDay().getDate();
  return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`;
};

console.log("getTomorrowDate:", getTomorrowDate());

const setDateIntervals = () => {
  dateInput.value = getTomorrowDate();
  dateInput.min = getTomorrowDate();
  dateInput.max = getNextDay().getFullYear() + "-12-31";
};

// FUNCIONES PARA LA VALIDACION

const isValidDate = () => {
  const currentDate = new Date();
  const turnDate = getNextDay();
  return currentDate < turnDate;
};

const isPhoneValid = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isEmpty = (value) => !value.length;
console.log(isEmpty(""));

// MANEJO DE ERRORES
const showError = (input, message) => {
  const formField = input.parenElement;
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const clearError = (input) => {
  const formField = input.parenElement;
  formField.classList.remove("error");
  const error = formField.querySelector("small");
  error.textContent = "";
};

// FUNCIONES UTILES PARA TRABAJAR CON LAS PROPIEDADES DEL OBJETO 'agenda'

const getRadioValue = (inputs) => {
  const checkedInput = [...inputs].find((input) => input.checked);
  return checkedInput.value;
};

const getCheckedOptions = (inputs) => {
  const checkedOptions = [...inputs].filter((input) => input.checked).map((e) => e.value);
  return checkedOptions;
};

const formatDate = (date) => {
  const splitDate = date.split("-").reverse().join("/");
  return splitDate;
};

// FORMATO DE LAS CARDS

const setCardBackground = (quantity) => {
  if (quantity === "Más de 10") {
    return "violet-card";
  } else if (quantity === "Entre 5 y 10") {
    return "red-card";
  } else {
    return "black-card";
  }
};

const setTimeBackground = (quantity) => {
  return quantity === "Menos de 5" ? "red-card" : "black-card";
};

const setDateBackground = (quantity) => {
  return quantity === "Más de 10" ? "red-card" : "violet-card";
};

//ESTABLECER IMAGENES EN LAS CARDS

const setCardImg = (quantity) => {
  if (quantity === "Más de 10") {
    return "./assets/img/server.png";
  } else if (quantity === "Entre 5 y 10") {
    return "./assets/img/laptop.png";
  } else {
    return "./assets/img/lupa.png";
  }
};

const setCardImgClass = (quantity) => {
  if (quantity === "Más de 10") {
    return "server-img";
  } else if (quantity === "Entre 5 y 10") {
    return "laptop-img";
  } else {
    return "lupa-img";
  }
};
