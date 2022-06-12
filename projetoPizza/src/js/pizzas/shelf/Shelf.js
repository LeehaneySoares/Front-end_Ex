import Card from './card/Card.js'

class Shelf {
  #cards

  get cards () {
    return this.#cards
  }

  constructor (pizzas) {
    this.#cards = pizzas.map(pizza => Card.create(pizza))
  }

  static create (pizzas) {
    return new Shelf(pizzas)
  }
}

export default Shelf
