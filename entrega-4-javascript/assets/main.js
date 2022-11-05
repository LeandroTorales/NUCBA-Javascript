/* Guardado y llamado del localStorage */
const saveLocalStorage = () => {
  localStorage.setItem("pokemones", JSON.stringify(pokemones));
};
let pokemones = JSON.parse(localStorage.getItem("pokemones")) || [];

/* Modelo de dato */
const saveData = (poke) => {
  pokemones = [
    {
      img: poke.sprites.other.dream_world.front_default,
      nombre: poke.name,
      exp: poke.base_experience,
      id: poke.id,
      height: poke.height,
      weight: poke.weight,
      types: poke.types.map((type) => type.type.name),
    },
  ];
};

/* Renders */
/* Error si esta vacio el input */
const errorIsEmpty = () => {
  containerResults.innerHTML = `FOIAENMFOIAENMOAENFOUANEFOUAENFOUAENFANEFOINAEFINEAFUNAEFUNAEUFNAEOUFNAEOUFNAEUFN`;
};

/* Error si el id ingresado no es valido */
const errorIdInvalid = () => {
  containerResults.innerHTML = ` ASDASDASDASDASDASDASDASDASDASDADASD`;
};

/* Container del pokemon success */
const renderPokemonContainer = (poke) => {
  return `
  <div class="container__card">
        <img src="${poke.sprites.other.dream_world.front_default}" alt="${poke.name}" class="img__pokemon" />
        <h2>${poke.name}</h2>
        <div class="container__expYid-flex">
          <span class="exp__pokemon">Exp: ${poke.base_experience}</span>
          <p class="id__pokemon">Id: ${poke.id}</p>
        </div>
        <p class="height__pokemon">Height: ${poke.height}m</p>
        <p class="weight__pokemon">Weight: ${poke.weight}kg</p>
        <div class="container__pokemon-type">
           Aca iria un map que entre renderize los span de abajo con los types
          <span class="${} type__pokemon">${}</span>
          <span class="${} type__pokemon">${}</span>
        </div>
      </div>`
};
/* Funcion del submit par a evaluar cada situacion del input, si es correcto, se guarda en localStorage y se renderiza */
const submitPokemon = (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (!isValidForm() && isEmpty(inputValue)) {
    errorIsEmpty();
    form.reset();
    return;
  } else if ((!isValidForm() && inputValue <= 0) || inputValue > 1154) {
    errorIdInvalid();
    form.reset();
    return;
  } else {
    fetchPokemon(inputValue);
    form.reset();
  }
};

/* Funcion inicializadora */
const init = () => {
  form.addEventListener("submit", submitPokemon);
};

init();
