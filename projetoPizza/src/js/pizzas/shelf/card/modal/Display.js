import appendInfo from './actions/appendInfo.js'
import cancelButton from './actions/cancelButton.js'

class Display {
  #modal

  get modal () {
    return this.#modal
  }

  constructor (modal) {
    this.#modal = modal
    this.cancel()
  }

  cancel () {
    cancelButton(this.modal)
    return this
  }

  static create (modal, props) {
    return new Display(
      modal,
      appendInfo(props)
    )
  }
}

export default Display
