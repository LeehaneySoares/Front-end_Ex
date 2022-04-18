import { getPokemons } from './getPokemons.js'

export const generatePromises = () =>
  Array(150).fill().map((_, index) => getPokemons(index + 1).then(response => response))