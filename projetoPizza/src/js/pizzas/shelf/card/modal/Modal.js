import appendInfo from './actions/appendInfo.js'
import cancelButton from './actions/cancelButton.js'
import sizeSelected from './actions/sizeSelected.js'

class Modal {
  get modal () {
    return document.querySelector('.pizzaWindowArea')
  }

  get options () {
    return document.querySelector('.pizzaInfo--sizes')
  }

  constructor () {
    cancelButton(this)
    this.changeSizes()
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

  changeSizes () {
    sizeSelected(this)
    return this
  }

  static create (parent) {
    return new Modal(
      appendInfo(parent)
    )
  }
}

export default Modal
