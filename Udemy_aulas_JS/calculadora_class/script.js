class Calculadora {
  #input

  get input () {
    return this.#input ??= ''
  }

  constructor() {
    this.#input = document.querySelector('.calc__display')
    this.pressEnter()
    this.createButton()
  }

  backSpace () {
    this.#input.value = this.input.value.slice(0, -1)
    return this
  }

  clear () {
    this.#input.value = ''
    this.input.focus()
    return this
  }

  changeValue(value) {
    this.#input.value += value
    return this
  }

  createButton() {
    document.addEventListener('click', (event) => {
      const key = event.target
      key.classList.contains('btn-num') ? this.changeValue(key.innerText) : false
      key.classList.contains('btn-clear') ? this.clear() : false
      if (key.classList.contains('btn-div') || key.classList.contains('btn-multi') || key.classList.contains('btn-soma') || key.classList.contains('btn-sub')) {
        this.changeValue(key.innerText)
      }
      key.classList.contains('btn-eq') ? this.result() : false
      key.classList.contains('btn-del') ? this.backSpace() : false
      this.input.focus()
    })
    return this
  }

  pressEnter () {
    this.input.addEventListener('keypress', (event) =>
      event.code === 'Enter'
        ? this.result()
        : false
    )
    return this
  }

  result () {
    this.#input.value = eval(`${this.input.value}`)
    return this
  }

  static create() {
    return new Calculadora()
  }
}

const calculadora = Calculadora.create()
