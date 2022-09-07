const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* for (i = 0; i < array.length; i++) {
  console.log(array[i]);
} */
/* 
for (i = 0; i < array[4]; i++) {
  console.log(array[i]);
}
*/
/* for (i = 0; i < array.length; i++) {
  if (i <= 4) {
    continue;
  }
  console.log(array[i]);
} */
/*
for (i = 0; i < array.length; i++) {
    if (i === 3) {
        continue;
    }
    console.log(array[i]);
}
*/
/* for (i = 1; i <= 50; i++) {
  console.log(`Estamos en la iteración número ${i}`);
} */
/* for (i = 50; i >= 1; i--) {
  console.log(`Estamos en la iteración número ${i}`);
} */
/* 
let contador = 0;
while (contador < 20) {
  console.log(`contador`);
  contador++;
}
console.log(`contador`);
 */
/* for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
 */
/* for (i = 0; i < array.length; i++) {
  console.log(array[i] * 2);
} */
/* for (i = 0; i < array[4]; i++) {
  console.log(array[i]);
} */
/* for (i = 0; i < array.length; i++) {
  if (i >= 5) {
    break;
  }
  console.log(array[i]);
}
 */
/* for (i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    continue;
  }
  console.log(array[i]);
} */
/* for (i = 0; i < array.length; i++) {
  if (array[i] % 2 == !0) {
    continue;
  }
  console.log(array[i]);
} */
/* for (i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    continue;
  }
  console.log(array[i]);
} */
for (i = 1; i <= array.length; i++) {
  for (e = 0; e < 10; e++) {
    console.log(`${array[e]} multiplicado por ${i} es igual a ${array[e] * i}`);
  } /* SE HACEN 10 BUCLES EN TOTAL, EL BUCLE PRINCIPAL HACE QUE EL BUCLE QUE ESTA DENTRO DEL BUCLE SE EJECUTE 10 VECES, OSEASE HASTA QUE EL BUCLE ALCANCE LA LONGITUD DEL ARRAY */
}
