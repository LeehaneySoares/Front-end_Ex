import { generatePromises } from './services/generatePromises.js'
import { template } from './template.js'

const app = () => {
  const ul = document.querySelector('[data-js="pokedex"]')
  const promisesPokemon = generatePromises()

  Promise.all(promisesPokemon)
    .then(response => {
      ul.innerHTML = template(response)
    })
}

app()
