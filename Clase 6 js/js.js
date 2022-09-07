/* 
};
console.log(`Soy una zapatilla ${zapatilla.marca}, de talle ${zapatilla.talle} y color ${zapatilla.color}`);
 */

/* Clase  */
class zapatosClass {
  constructor(marca, talle, color, precio) {
    this.marca = marca;
    this.talle = talle;
    this.color = color;
    this.precio = precio;
  }
  //metodo para descripcion de objeto
  getInfoZapatilla = () => {
    return console.log(`Soy una zapatilla ${this.marca} de color ${this.color} y de talle ${this.talle}.`);
  };
  /* Metodo comparcion */
  comparacionTalle = (a, b) => {
    if (a.talle > b.talle) {
      console.log(`El talle de la zapatilla Adidas es mayor que el de la zapatilla Nike`);
    } else if (a.talle < b.talle) {
      console.log(`El talle de la zapatilla Nike es mayor que el de la zapatilla Adidas`);
    } else {
      console.log(`Ambos talles son iguales`);
    }
  };
  //metodo Para comparar dos precios y arrojar por consola el precio adecuado
  precioZapatilla = (a, b) => {
    if (a.precio > b.precio) {
      console.log(`La zapatilla ${a.marca} es la mas cara del mercado, con un valor de ${a.precio}`);
    } else if (a.precio < b.precio) {
      console.log(`La zapatilla ${a.marca} es la mas barata del mercado, con un valor de ${a.precio}`);
    } else if (a.precio == b.precio) {
      console.log(`Las zapatillas de ambas marcas son las mas caras del mercado, con un valor dpe ${this.precio}`);
    }
  };
}

/* Objetos */
const zapatilla = new zapatosClass("Adidas", 41, "marron", 250000);
const zapatilla2 = new zapatosClass("Nike", 38, "blanco", 414);

/* Se loguea el objeto */
console.log(zapatilla);
console.log(zapatilla2);

/* Llamado al metodo para describir al objeto */
zapatilla.getInfoZapatilla();
zapatilla2.getInfoZapatilla();

//Se llama al metodo de comparacion y se les da sus dos parametros correspondientes
zapatilla.comparacionTalle(zapatilla, zapatilla2);

//Se llama al metodo para comparar los precios
zapatilla.precioZapatilla(zapatilla, zapatilla2);
