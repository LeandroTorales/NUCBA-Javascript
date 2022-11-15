class persona {
  constructor(nombre, edad, nacionalidad, saludo) {
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    const saludooo = function () {
      return `Hola, me llamo ${this.nombre}`;
    };
    this.saludar = saludooo;
  }
}
class persona3 extends persona {
  super(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
const personitttaaa = new persona("elisa", 39, "bolivia");
const personita = new persona3("Juan", 28, "Argentina");
persona3.prototype.nacionalidad = function () {
  return `Mi nacionalidad es ${this.nacionalidad}`;
};
console.log(personitttaaa);
console.log(personita);
console.log(personita.saludar());
console.log(personita.nacionalidad);

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

/* Llamado a la api pokemon para conseguir la data del pokemon elegido en el input value */
/* const fetchPokemon = async (value) => {
  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${value}`;
  const response = await fetch(pokeApiUrl);
  const data = await response.json();
  console.log(data);
  return data;
};
 */
const fetchPokemon = async (nameOrLevel) => {
  const url = `https://digimon-api.vercel.app/api/digimon/name/${nameOrLevel}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
/* const dataDigi = await getData(inputValue); */

/* Guardado y llamado del localStorage */
const saveLocalStorage = () => {
  localStorage.setItem("pokemones", JSON.stringify(pokemones));
};
let pokemones = JSON.parse(localStorage.getItem("pokemones")) || [];

/* Modelo de dato */
const saveData = (poke) => {
  console.log(poke);
  pokemones = [...poke];
};

/* Renders */
/* Error si esta vacio el input */
const errorIsEmpty = () => {
  containerResults.innerHTML = `<div class="container__card error">
        <i class="fa-solid fa-triangle-exclamation icon__error"></i>
        <h3 class="title__error">Ingresar un numero para buscar la pizza en el menú.</h3>
      </div>`;
};

/* Error si el id ingresado no es valido */
const errorIdInvalid = () => {
  containerResults.innerHTML = ` <div class="container__card error">
        <i class="fa-solid fa-triangle-exclamation icon__error"></i>
        <h3 class="title__error">Ingresar un numero valido para buscar un pokemon.</h3>
      </div>`;
};

/* Container del pokemon success */
const renderPokemonContainer = (poke) => {
  console.log(poke);
  return `
  <div class="container__card success">
  <img src="${poke.img}" width="200px" alt="${poke.name}" class="img__pokemon" />
        <h2>${poke.name}</h2>
        <p class="weight__pokemon"> ${poke.level}</p>
  </div> 
      `;
};

const renderPokemon = () => {
  containerResults.innerHTML = pokemones.map((pokemon) => renderPokemonContainer(pokemon));
};

/* Funcion del submit par a evaluar cada situacion del input, si es correcto, se guarda en localStorage y se renderiza */
const submitPokemon = async (e) => {
  e.preventDefault();

  const dataPoke = await fetchPokemon("patamon");
  console.log(dataPoke);
  saveData(dataPoke);
  saveLocalStorage();
  renderPokemon();
  form.reset();
};

/* Funcion inicializadora */
const init = async () => {
  form.addEventListener("submit", submitPokemon);
  window.addEventListener("DOMContentLoaded", renderPokemon());
};

init();
