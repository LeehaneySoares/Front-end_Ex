import { $ } from './shortcuts.js'

class Card {
  #description
  #figure
  #img
  #name
  #price
  #sizes

  get figure () {
    return this.#figure
  }

  get description () {
    return this.#description
  }

  get img () {
    return this.#img
  }

  get name () {
    return this.#name
  }

  get price () {
    return this.#price
  }

  get sizes () {
    return this.#sizes
  }

  constructor (pizza) {
    this.#description = pizza.description
    this.#img = pizza.img
    this.#name = pizza.name
    this.#price = pizza.price.toFixed(2)
    this.#sizes = pizza.sizes
    this.mount()
  }

  mount () {
    this.#figure = $('.models .pizza-item').cloneNode(true)
    this.#figure.querySelector('img').src = this.img
    this.#figure.querySelector('.pizza-item--price').innerHTML = `R$ ${this.price}`
    this.#figure.querySelector('.pizza-item--name').innerHTML = this.name
    this.#figure.querySelector('.pizza-item--desc').innerHTML = this.description
    return this
  }

  static create (pizza) {
    return new Card(pizza)
  }
}

export default Card
