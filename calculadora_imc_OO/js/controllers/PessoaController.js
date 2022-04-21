class PessoaController {
  #imc

  get imc () {
    return this.#imc ??= ''
  }

  constructor (altura, peso) {
    this.calc(altura, peso)
  }

  calc(altura, peso) {
    this.#imc = (peso / (altura ** 2)).toFixed(2)
    return this
  }

  static create (descriptor) {
    return new PessoaController(
      descriptor?.altura,
      descriptor?.peso
    )
  }
}

export default PessoaController
