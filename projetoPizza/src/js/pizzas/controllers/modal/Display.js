import { $ } from '../scripts/shortcuts.js'

class Display {
  #modal
  #description
  #price
  #sizes
  #title

  get cancelButton () {
    return $('.pizzaInfo--cancelButton')
  }

  get description () {
    return this.#description
  }

  get pizzaInfo () {
    return $('.pizzaInfo')
  }

  get price () {
    return this.#price
  }

  get sizes () {
    return this.#sizes
  }

  get title () {
    return this.#title
  }

  constructor (modal, props) {
    this.#modal = modal
    this.#title = props.name
    this.#description = props.description
    this.#sizes = props.sizes
    this.#price = props.price
    this.changeValues()
    this.cancel()
  }

  cancel () {
    this.cancelButton.addEventListener('click', () => this.#modal.close())
    return this
  }

  changeValues () {
    this.pizzaInfo.querySelector('h1').innerHTML = this.title
    this.pizzaInfo.querySelector('.pizzaInfo--desc').innerHTML = this.description
    this.pizzaInfo.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${this.price}`
    return this
  }

  static create (modal, props) {
    return new Display(modal, props)
  }
}

export default Display
