export const getPokemons = (id) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))