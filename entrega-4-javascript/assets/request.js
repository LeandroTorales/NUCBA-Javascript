/* Llamado a la api pokemon para conseguir la data del pokemon elegido en el input value */
const fetchPokemon = async (value) => {
  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${value}`;
  const response = await fetch(pokeApiUrl);
  const data = await response.json();
  console.log(data);
  return data;
};
