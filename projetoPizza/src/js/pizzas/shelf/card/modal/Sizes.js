import sizeSelected from './actions/sizeSelected.js'

class Sizes {
  #size

  get size () {
    return this.#size
  }

  constructor (size) {
    this.#size = size
    this.changeSelected()
  }

  changeSelected () {
    this.size.forEach((item, index) => (
      index === 2 ? item.classList.add('selected') : false,
      item.addEventListener('click', () => sizeSelected(item))
    ))
    return this
  }

  static create (size) {
    return new Sizes(size)
  }
}

export default Sizes
