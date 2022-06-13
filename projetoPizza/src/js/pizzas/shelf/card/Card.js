import Modal from './modal/Modal.js'
import mount from './mount.js'

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
    return this.#figure
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
    mount(this)
  }

  appendFigure (figure) {
    this.#figure = figure
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
