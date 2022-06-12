import appendInfo from './actions/appendInfo.js'
import cancelButton from './actions/cancelButton.js'

class Display {
  #modal

  constructor (modal, props) {
    this.#modal = modal
    appendInfo(props)
    this.cancel()
  }

  cancel () {
    cancelButton(this.#modal)
    return this
  }

  static create (modal, props) {
    return new Display(modal, props)
  }
}

export default Display
