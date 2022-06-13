import appendInfo from './actions/appendInfo.js'
import cancelButton from './actions/cancelButton.js'

class Modal {
  #modal

  get modal () {
    return this.#modal ??= document.querySelector('.pizzaWindowArea')
  }

  constructor () {
    cancelButton(this)
  }

  open () {
    this.modal.style.opacity = 0
    this.modal.style.display = 'flex'
    setTimeout(() => this.modal.style.opacity = 1, 200)
    return this
  }

  close () {
    this.modal.style.opacity = 0
    setTimeout(() => this.modal.style.display = 'none', 200)
    return this
  }

  static create (parent) {
    return new Modal(
      appendInfo(parent)
    )
  }
}

export default Modal
