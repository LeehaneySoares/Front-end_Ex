import { $ } from '../scripts/shortcuts.js'

class Modal {
  #modal
  #parent

  get modal () {
    return this.#modal ??= $('.pizzaWindowArea')
  }

  constructor (parent) {
    this.#parent = parent
    console.log(parent)
  }

  open () {
    this.modal.style.opacity = 0
    this.modal.style.display = 'flex'
    setTimeout(() => this.modal.style.opacity = 1, 200)
    return this
  }

  close () {
    modal.style.opacity = 0
    setTimeout(() => modal.style.display = 'none', 200)
    return this
  }

  static create (parent) {
    return new Modal(parent)
  }
}

export default Modal
