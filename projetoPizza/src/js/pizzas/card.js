class Card {
  #figure
  #description
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
    this.#figure = this.mount()
  }

  mount () {
    return `
      <figure class="pizza-item">
        <a href="">
          <div class="pizza-item--img"><img src=${this.img} /></div>
          <div class="pizza-item--add">+</div>
        </a>
        <div class="pizza-item--price">R$ ${this.price}</div>
        <div class="pizza-item--name">${this.name}</div>
        <div class="pizza-item--desc">${this.description}</div>
      </figure>
    `
  }

  static create (pizza) {
    return new Card(pizza)
  }
}

export default Card
