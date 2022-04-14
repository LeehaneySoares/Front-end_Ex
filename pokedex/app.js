import { getPokemons } from './getPokemons.js'

const app = () => {
  for (let id = 1; id <= 150; id++) {
    getPokemons(id)
  }
}

app()