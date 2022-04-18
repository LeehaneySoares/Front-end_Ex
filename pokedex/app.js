import { generatePromises } from './generatePromises.js'
import { template } from './template.js'

const app = () => {
  const ul = document.querySelector('[data-js="pokedex"]')
  const promisesPokemon = generatePromises()

  Promise.all(promisesPokemon)
    .then(response => {
      console.log(response)
      ul.innerHTML = template(response)
    })
}

app()