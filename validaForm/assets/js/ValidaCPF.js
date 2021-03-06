class ValidaCPF {
  #cpfParcial
  #firstDigit
  #secondDigit
  #cpfValidado

  constructor (cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      writable: false,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    })
  }

  formule (total) {
    const result = 11 - (total % 11)
    return result <= 9 ? result : '0'
  }

  generateParcial () {
    return this.cpfLimpo.slice(0, -2)
  }

  getNumber (cpfParcial) {
    const parcial = [...cpfParcial]
    let multiply = parcial.length + 1
    const total = parcial.reduce(function (acc, item) {
      acc += item * multiply
      multiply--
      return acc
    }, 0)
    return this.formule(total)
  }

  isSequence () {
    const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return this.cpfLimpo === sequence
  }

  showMessage (input, message) {
    const div = document.createElement('div')
    div.classList.add('error__message')
    message
      ? div.innerHTML = message
      : div.innerHTML = 'CPF inválido'
    input.insertAdjacentElement('afterend', div)
    return this
  }

  valid () {
    if (typeof this.cpfLimpo === 'undefined') return 'N° de CPF não é válido'
    if (this.cpfLimpo.length !== 11) return 'CPF faltando números'
    if (this.isSequence()) return 'CPF não pode ser uma sequência'
    this.#cpfParcial = this.generateParcial()
    this.#firstDigit = this.getNumber(this.#cpfParcial)
    this.#secondDigit = this.getNumber(this.#cpfParcial + this.#firstDigit)
    this.#cpfValidado = this.#cpfParcial + this.#firstDigit + this.#secondDigit
    return this.#cpfValidado === this.cpfLimpo
  }

  static create (cpf) {
    return new ValidaCPF(cpf)
  }
}

export default ValidaCPF
