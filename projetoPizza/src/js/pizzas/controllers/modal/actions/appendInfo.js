import { $ } from '../../scripts/shortcuts.js'

const pizzaInfo = $('.pizzaInfo')

function appendInfo (info) {
  pizzaInfo.querySelector('h1').innerHTML = info.name
  pizzaInfo.querySelector('.pizzaInfo--desc').innerHTML = info.description
  pizzaInfo.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${info.price}`
}

export default appendInfo
