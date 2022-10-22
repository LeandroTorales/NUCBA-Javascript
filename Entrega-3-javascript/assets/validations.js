const inputValue = document.getElementById("form__input");
const pizzasArray = [
  {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "aceitunas", "aceite de oliva"],
    precio: 400,
    imagen: "./assets/img/pizza-muzzarella.png",
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

const checkNumberInput = (input) => {
    let valid = false;
    if (isEmpty(input)) {
        return
    }
};
