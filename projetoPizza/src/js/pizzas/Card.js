import { $ } from './controllers/scripts/shortcuts.js'
import Modal from './controllers/modal/Modal.js'

class Card {
  #description
  #figure
  #img
  #modal
  #name
  #price
  #sizes

  get description () {
    return this.#description
  }

  get figure () {
    return this.#figure ??= $('.models .pizza-item').cloneNode(true)
  }

  get img () {
    return this.#img
  }

  get modal () {
    return this.#modal ??= Modal.create(this)
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
    this.figure.querySelector('img').src = this.img
    this.figure.querySelector('.pizza-item--price').innerHTML = `R$ ${this.price}`
    this.figure.querySelector('.pizza-item--name').innerHTML = this.name
    this.figure.querySelector('.pizza-item--desc').innerHTML = this.description
    this.figure.querySelector('.pizza-item a').addEventListener('click', (event) => this.openModal(event))
    return this
  }

  openModal (event) {
    event.preventDefault()
    this.modal.open()
    return this
  }

  static create (pizza) {
    return new Card(pizza)
  }
}

export default Card
