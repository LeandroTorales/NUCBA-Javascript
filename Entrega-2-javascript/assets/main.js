const form = document.getElementById("form");
const cardsContainer = document.getElementById("cards__renders--containers");

let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
const saveLocalStorage = () => {
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
};

const saveData = () => {
  const inputValue = inputNumber.value;
  const findPizza = pizzasArray.find((e) => e.id == inputValue) || [];
  pizzas = [
    ...pizzas,
    {
      id: findPizza.id,
      nombre: findPizza.nombre,
      precio: findPizza.precio,
    },
  ];
};

const renderContainerPizza = (pizza) => {
  const { id, nombre, ingredientes, precio } = pizza;
  return `
          <div class="render__succes">
            <h2>Pizza ${nombre}, con id ${id}</h2>
            <h3>El precio de la pizza es: <span>$${precio}</span></h3>
          </div>
          `;
};

const renderPizza = () => {
  cardsContainer.innerHTML = pizzas.map(renderContainerPizza).join("");
};

const submitForm = (e) => {
  e.preventDefault();
  if (isValidForm()) {
    saveData();
    saveLocalStorage();
    renderPizza();
    form.reset();
  }
};

const init = () => {
  window.addEventListener("DOMContentLoaded", renderPizza(pizzas));
  form.addEventListener("submit", submitForm);
};

init();
