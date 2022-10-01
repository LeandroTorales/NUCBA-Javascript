const numeros = document.querySelectorAll(".item-numbers");
const resultMain = document.querySelector(".result-main");
const signoOperador = document.querySelectorAll(".operador");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const point = document.querySelector(".point");

let primerValor = "";
let isPrimerValor = false;
let segundoValor = "";
let isSegundoValor = false;
let operador = "";
let resultadoValor = 0;

numeros.forEach((e) => {
  e.addEventListener("click", (e) => {
    let atr = e.target.getAttribute("value");
    if (isPrimerValor === false) {
      getPrimerValor(atr);
    }
    console.log(atr);
  });
});

const getPrimerValor = (e) => {
  resultMain.innerHTML = "";
  primerValor += e;
  resultMain.innerHTML = primerValor;
  primerValor = +primerValor;
};

const getSegundoValor = (e) => {
  if (primerValor != "" && operador != "") {
    segundoValor += e;
    resultMain.innerHTML = segundoValor;
    segundoValor = +segundoValor;
  }
};

getOperador = () => {
  signoOperador.forEach((e) => {
    e.addEventListener("click", (e) => {
      operador = e.target.getAttribute("value");
      console.log('operador:', operador)
      isPrimerValor = true;
    });
  });
};
getOperador();

result.addEventListener("click", () => {
  resultMain.innerHTML = "";
  if (operador === "+") {
    resultadoValor = primerValor + segundoValor;
  } else if (operador === "-") {
    resultadoValor = primerValor - segundoValor;
  } else if (operador === "*") {
    resultadoValor = primerValor * segundoValor;
  } else if (operador === "/") {
    resultadoValor = primerValor / segundoValor;
  }
  resultMain.innerHTML = resultadoValor;
  primerValor = resultadoValor;
  segundoValor = "";
});
