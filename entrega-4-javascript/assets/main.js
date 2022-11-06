/* Guardado y llamado del localStorage */
const saveLocalStorage = () => {
  localStorage.setItem("pokemones", JSON.stringify(pokemones));
};
let pokemones = JSON.parse(localStorage.getItem("pokemones")) || [];

/* Modelo de dato */
const saveData = (poke) => {
  console.log(poke);
  pokemones = [poke];
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
        <img src="${poke.sprites.other.dream_world.front_default}" alt="${poke.name}" class="img__pokemon" />
        <h2>${poke.name}</h2>
        <div class="container__expYid-flex">
          <span class="exp__pokemon">Exp: ${poke.base_experience}</span>
          <p class="id__pokemon">Id: ${poke.id}</p>
        </div>
        <p class="height__pokemon">Height: ${poke.height / 10}m</p>
        <p class="weight__pokemon">Weight: ${poke.weight / 10}kg</p>
        <div class="container__pokemon-type">
        ${poke.types
          .map((type) => {
            return `
                  <span class="${type.type.name} type__pokemon">${type.type.name}</span>
                 `;
          })
          .join("")}
        </div>
      </div> 
      `;
};

const renderPokemon = () => {
  containerResults.innerHTML = pokemones.map((pokemon) => renderPokemonContainer(pokemon));
};

/* Funcion del submit par a evaluar cada situacion del input, si es correcto, se guarda en localStorage y se renderiza */
const submitPokemon = async (e) => {
  e.preventDefault();
  const inputValue = inputNumber.value;

  if (!isValidForm() && isEmpty(inputValue)) {
    errorIsEmpty();
    form.reset();
    return;
  } else if ((!isValidForm() && inputValue <= 0) || inputValue > 1154) {
    errorIdInvalid();
    form.reset();
    return;
  } else {
    const dataPoke = await fetchPokemon(inputValue);
    saveData(dataPoke);
    saveLocalStorage();
    renderPokemon();
    form.reset();
  }
};

/* Funcion inicializadora */
const init = async () => {
  form.addEventListener("submit", submitPokemon);
  window.addEventListener("DOMContentLoaded", renderPokemon());
};

init();
