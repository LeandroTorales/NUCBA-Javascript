//1
/* const filtarM = (filtrado) => {
  let nuevoArrayPalabras = [];
  filtrado.forEach((element) => {
    if (element.toLowerCase().includes("m")) {
      nuevoArrayPalabras.push(element);
    }
  });
  return nuevoArrayPalabras;
};

console.log(filtarM(arrayPalabras)); */

//2
/* const filtrarNumeros = (a, b, filtrar) => {
  let nuevoArrayNumeros = [];
  filtrar.forEach((filtrar) => {
    if (filtrar > a && filtrar < b) {
      nuevoArrayNumeros.push(filtrar);
    }
  });
  return nuevoArrayNumeros;
};
console.log("filtrarNumeros:", filtrarNumeros1(10, 800, arrayNumeros)); */

const arrayNumeros2 = [1, 2, 3, 4, 5];

//3
/* const multiplicarAlgunosNumeros = (a, b, filtrado) => {
  let nuevoArrayNumeros = [];
  filtrado.forEach((filtrado) => {
    if (filtrado > a) {
      nuevoArrayNumeros.push(filtrado * b);
    } else if (filtrado <= a) {
      nuevoArrayNumeros.push(filtrado);
    }
  });
  return nuevoArrayNumeros;
}; */

/* console.log(multiplicarAlgunosNumeros(3, 10, arrayNumeros2));  */

//4
/* const encontrarNumero = (array, n) => {
  if (array.some((numero) => numero > n)) {
    return array.find((numero) => numero > n);
  } else {
    return "No hay numeros coincidientes";
  }
};
console.log("Desafio 4:", encontrarNumero(arrayNumeros2, 3)); */

//Desafio 5:
const arrayPalabras = ["casa", "Mansion", "marioneta", "trapo", "Patio"];
/* const encontrarPalabra = (palabra) => {
  if (palabra.some((palabra) => palabra.length > 4)) {
    return palabra.find((palabra) => palabra.length > 4);
  } else {
    return "No hay palabras con mas de 4 letras";
  }
};

console.log("Desafio 5:", encontrarPalabra(arrayPalabras)); */

//Desafio 6:

const arrayNumeros1 = [1, 24, 41, 7, 845, 4, 3566, 351, 9];
/* const duplicarNumeros = (n) => n.map((n) => n * 2);
console.log(duplicarNumeros(arrayNumeros1)); */

//Desafio 7:
//Se define el callback de la operacion por fuera y luego se le llama a la operacion dentro del metodo map
/* const multiplicacion = (a, b) => a * b;

const recibirNumeros = (array, numero, operacion) => array.map((array) => operacion(array, numero));
console.log(recibirNumeros(arrayNumeros1, 2, multiplicacion));
 */

//Desafio: 8
class Pelicula {
  constructor(titulo, duracion, año) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.año = año;
  }
}

const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
const starWars = new Pelicula("Star Wars: El despertar de la fuerza", 135, 2015);
const batman = new Pelicula("Batman vs Superman", 151, 2016);
const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

const arrayVacioPeli = [];
arrayVacioPeli.push(pokemon, avengers, starWars, batman, wonderWoman);

//Desafio 9:
/* const ordenarPorAño = () => {
  arrayVacioPeli.sort((a, b) => (a.año > b.año ? 1 : -1));
  console.log(arrayVacioPeli);
};
ordenarPorAño(arrayVacioPeli); */
//Desafio 10:
/* const ordenarPorDuracion = () => {
  arrayVacioPeli.sort((a, b) => (a.duracion < b.duracion ? 1 : -1));
  console.log("arrayVacioPeli:", arrayVacioPeli);
};
ordenarPorDuracion(arrayVacioPeli); */

//Desafio 11:
/* const arrayNuevoPeliculas = (array) => array.filter((array) => array.duracion > 150);

console.log("arrayNuevoPeliculas:", arrayNuevoPeliculas(arrayVacioPeli));
 */
//Desafio 12:
/* const arrayNuevoDuracion = (array) => array.filter((array) => array.duracion < 150);
console.log(arrayNuevoDuracion(arrayVacioPeli));
 */
//Desafio 13:
//const sumatoriaNumeros = (array) => array.reduce((a, b) => a + b.duracion, 0 /* ACUMULADOR */);
//console.log(sumatoriaNumeros(arrayVacioPeli));
