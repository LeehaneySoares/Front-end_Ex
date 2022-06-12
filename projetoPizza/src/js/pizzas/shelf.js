import Card from './card.js'

class Shelf {
  #pizzas
  #cards

  get pizzas () {
    return this.#pizzas
  }

  get cards () {
    return this.#cards ??= this.pizzas.map(pizza => Card.create(pizza))
  }

  constructor (pizzas) {
    this.#pizzas = pizzas
  }

  static create (pizzas) {
    return new Shelf(pizzas)
  }
}

export default Shelf
