const urlApi = "https://reqres.in/api/users?page=1";
const promesaFetch = async (url) => {
  const apiFetch = await fetch(url);
  const results = await apiFetch.json();
  console.log(results.data);
  const resultForEach = results.data.forEach((persona) => console.log(`Hola, me llamo:${persona.first_name}, mi email es: ${persona.email}`));
  return results;
};
console.log(promesaFetch(urlApi));
