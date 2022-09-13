//Array de las pizzas
const pizzas = [
  { id: 1, nombre: "Muzzarella", ingredientes: ["Salsa de tomate", "queso muzzarella", "aceitunas", "aceite de oliva"], Precio: 400 },
  {
    id: 2,
    nombre: "Fugazzeta",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "cebolla", "jamon", "aceitunas", "aceite de oliva"],
    Precio: 600,
  },
  {
    id: 3,
    nombre: "Jamon y morrones",
    ingredientes: ["Salsa de tomate", "queso muzzarella", "jamon", "morron", "aceitunas", "aceite de oliva"],
    Precio: 500,
  },
  { id: 4, nombre: "New York", ingredientes: ["Salsa de tomate", "queso muzzarella", "pepperoni", "aceite de oliva"], Precio: 350 },
  { id: 5, nombre: "Napolitana", ingredientes: ["Salsa de tomate", "fior di latte", "albahaca", "aceite de oliva"], Precio: 650 },
  { id: 6, nombre: "Ultra power", ingredientes: ["Salsa de tomate", "queso cheddar", "albondigas", "aceitunas", "aceite de oliva"], Precio: 900 },
];

//a) Las pizzas que tengan un id impar.:
//Solucion 1:
const encontrarLosQueSonImpares = pizzas.filter((element) => element.id % 2 != 0);
const imprimirEnConsolaImpares = (element) => {
  encontrarLosQueSonImpares.forEach((element) => {
    console.log("Ejercicio A:", `La pizza ${element.nombre} es id impar`);
  });
};
imprimirEnConsolaImpares(encontrarLosQueSonImpares);

//b) ¿Hay alguna pizza que valga menos de $600?
//Solucion 1: con el metodo de arrays some retorna un booleano si hay alguna pizza de menos de 600$
const hayPizzaDeMenosDe600$ = pizzas.some((element) => element.Precio < 600);
console.log("Ejercicio B:", `Hay Pizzas que valgan menos de 600$: Si, hay (${hayPizzaDeMenosDe600$})`);

//c) El nombre de cada pizza con su respectivo precio.
//Solucion 1: Se pushea los nuevos strings con los nombres y los precios por cada objeto con el foreach hacia el array vacio, luego se le hace return para que devuelva el valor
const pizzaNombreYPRecio = (element) => {
  element.forEach((element) => {
    console.log("Ejercicio C:", `El nombre de la pizza es: ${element.nombre}, y su precio es de ${element.Precio}`);
  });
};
pizzaNombreYPRecio(pizzas);

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).
//Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.
//Solucion 1:
const ingredientesDePizza = (element) => {
  element.forEach((element) => {
    console.log("Ejercicio D:", `\n  Los ingredientes que tiene la pizza de nombre ${element.nombre} son: \n    ${element.ingredientes}.`);
  });
};
ingredientesDePizza(pizzas);
