import { colors, randomIndex } from './cores.js'

const button = document.querySelector('.btn')
const label = document.querySelector('.name')

button.addEventListener('click', function () {
  const body = document.querySelector('[data-color="background"]')
  body.style['background-color'] = colors[randomIndex()]
  label.textContent = colors[randomIndex()]
})
