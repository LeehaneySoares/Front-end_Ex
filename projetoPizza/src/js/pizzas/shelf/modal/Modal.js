import { $ } from '../../controllers/scripts/shortcuts.js'
import appendInfo from './actions/appendInfo.js'
import cancelButton from './actions/cancelButton.js'
import Display from './Display.js'

class Modal {
  #modal
  #parent

  get modal () {
    return this.#modal ??= $('.pizzaWindowArea')
  }

  constructor (parent) {
    appendInfo(parent)
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
    return new Modal(parent)
  }
}

export default Modal
