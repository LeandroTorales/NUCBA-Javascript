const urlApiPokemon = "https://pokeapi.co/api/v2/pokemon/";
const promesaFetch = (url) => {
  fetch(url)
    .then((resolve) => resolve.json())
    .then((resolve) => console.log(resolve.results))
    .catch((error) => console.log(error));
};
promesaFetch(urlApiPokemon);
