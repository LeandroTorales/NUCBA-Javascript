/* lo que esta entre parentesis es la variable local llamada parametro */
/* const funcionNombre = (nombre) => {
  console.log(`Hola, soy ${nombre}`);
};
funcionNombre("Leandro"); */

/* const funcionaSumar = (a, b) => {
  console.log(a + b);
};
funcionaSumar(2, 8); */

/* const funcionMultiplicar = (a, b) => {
  console.log(a * 2 + b * 2);
};
funcionMultiplicar(2, 8); */

/* const tablaMultiplicar = (a) => {
  for (i = 0; i <= 10; i++) {
    console.log(`El ${a} multiplicado por ${i} es igual a ${a * i}`);
  }
};
tablaMultiplicar(932875891245829175821495891247512489572439572489571248957214987); */

/* const intervalos = (a, b) => {
  if (a > b) {
    console.log(`${a}`);
    while (a > b) {
      a--;
      console.log(`${a}`);
    }
  } else if (a < b) {
    console.log(`${a}`);
    while (a < b) {
      a++;
      console.log(`${a}`);
    }
  } else {
    console.log("Ambos numeros son iguales");
  }
};

intervalos(2, 10); */

/* Hamburguesa elegir combos */
const armarCombo = (function () {
  const hamburguesaArray = ["carne", "pollo", "pescado", "vegetariano"];
  const acompañamientoArray = ["papas fritas", "batatas fritas", "aros de cebolla", "nuggets"];
  const panArray = ["blanco", "integral", "salvado", "papa"];
  const aderezoArray = ["mayonesa", "ketchup", "mostaza", "cesar"];
  const bebidaArray = ["Coca-Cola", "Pepsi", "7up", "Fanta", "Agua", "Jugo"];

  /*  letpreguntarHamburguesa = prompt("Hola, elige un tipo de hamburguesa\n1: carne\n2: pollo\n3: pescado\n4: vegetariano");
  let preguntarAcompañamiento = prompt("Hola, elige un tipo de acompañamiento\n1: papas fritas\n2: batatas fritas\n3: aros de cebolla\n4: nuggets");
  let preguntarPan = prompt("Hola, elige un tipo de pan\n1: blanco\n2: integral\n3: salvado\n4: papa");
  let preguntarAderezo = prompt("Hola, elige un tipo de aderezo\n1: mayonesa\n2: ketchup\n3: mostaza\n4: cesar");
  let preguntarBebida = prompt("Hola, elige un tipo de bebida\n1: Coca-Cola\n2: Pepsi\n3: 7up\n4: Fanta \n5: Agua \n6: Jugo"); */

  const functionHamburguesa = (a) => {
    let elegirHamburguesa = prompt("Hola, elige un tipo de hamburguesa\n1: carne\n2: pollo\n3: pescado\n4: vegetariano");
    return elegirHamburguesa;
  };
  return {
    functionHamburguesa,
  };
})();

console.log(armarCombo.functionHamburguesa());
console.log(armarCombo.functionHamburguesa(`fafafa`));
