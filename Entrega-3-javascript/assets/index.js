const sectionResults = document.getElementById("section__results");
const form = document.getElementById("form");
const input = document.getElementById("form__input");
const inputValue = input.value;

/* Array de la pizzas*/
const pizzasArray = [
  {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "aceitunas", "aceite de oliva"],
    precio: 400,
    imagen: "./assets/img/pizza-muzarella.png",
  },
  {
    id: 2,
    nombre: "Fugazzeta",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "cebolla", "jamon", "aceitunas", "aceite de oliva"],
    precio: 600,
    imagen: "./assets/img/pizza-fugazzeta.png",
  },
  {
    id: 3,
    nombre: "Jamon y morrones",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "jamon", "morron", "aceitunas", "aceite de oliva"],
    precio: 500,
    imagen: "./assets/img/pizza-jamonYMorrones.png",
  },
  {
    id: 4,
    nombre: "New York",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "pepperoni", "aceite de oliva"],
    precio: 350,
    imagen: "./assets/img/pizza-newYork.png",
  },
  {
    id: 5,
    nombre: "Napolitana",
    ingredientes: ["Salsa de tomate", "fior di latte", "albahaca", "aceite de oliva"],
    precio: 650,
    imagen: "./assets/img/pizza-napolitana.png",
  },
  {
    id: 6,
    nombre: "Ultra power",
    ingredientes: ["Salsa de tomate", "queso cheddar", "albondigas", "aceitunas", "aceite de oliva"],
    precio: 900,
    imagen: "./assets/img/pizza-ultraPower.png",
  },
];

/* Guardado y llamado del localStorage */
let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
const saveLocalStorage = () => {
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
};

/* Funcion para encontrar al objeto en el input */
const findPizza = (value) => pizzasArray.find((pizza) => pizza.id == value);

/* Modelo de dato */
const saveData = (pizza) => {
  pizzas = [
    {
      id: pizza.id,
      nombre: pizza.nombre,
      precio: pizza.precio,
      imagen: pizza.imagen,
    },
  ];
};

/* Error si esta vacio el input */
const errorIsEmpty = () => {
  sectionResults.innerHTML = `
    <div class="container__pizza">
        <i class="fa-solid fa-triangle-exclamation icon__error"></i>
        <h3 class="title__error">Ingresar un numero para buscar la pizza en el menú.</h3>
    </div>
    `;
};

/* Error si es invalido el input */
const pizzaIdInvalid = () => {
  sectionResults.innerHTML = `
      <div class="container__pizza">
        <i class="fa-solid fa-triangle-exclamation icon__error"></i>
        <h3 class="title__error">El id ingresado no coincide con una pizza en el menú.</h3>
      </div>
    `;
};

/* Render Success */
const renderPizzaContainer = (pizza) => {
  return ` <div class="container__pizza">
        <h3 class="result__title">ID: ${pizza.id} <br> NOMBRE: ${pizza.nombre}</h3>
        <h4 class="result__precio">PRECIO: $${pizza.precio}</h4>
        <img src="${pizza.imagen}" alt="Pizza Imagen" class="img__pizza--card" />
    </div>
  `;
};

/* Funcion para renderizar el contenido success obteniendo los datos del localStorage */
const renderPizza = () => {
  sectionResults.innerHTML = pizzas.map(renderPizzaContainer);
};

/* Funcion del submit para evaluar cada situacion del input, si es correcto, se guarda en localStorage y se renderiza */
const submitPizza = (e) => {
  e.preventDefault();
  const inputValue = input.value;
  const pizzaBuscada = findPizza(inputValue);
  if (!inputValue) {
    errorIsEmpty();
    form.reset();
    return;
  } else if (pizzaBuscada == undefined) {
    pizzaIdInvalid();
    form.reset();
    return;
  } else {
    saveData(pizzaBuscada);
    saveLocalStorage();
    renderPizza();
    /* renderPizzaContainer(pizzaBuscada); */
    form.reset();
  }
};

/* Funcion inicializadora */
const init = () => {
  form.addEventListener("submit", submitPizza);
  window.addEventListener("DOMContentLoaded", renderPizza());
};

init();
