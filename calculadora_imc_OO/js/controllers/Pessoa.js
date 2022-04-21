import PessoaController from './PessoaController.js'
import Table from './table.js'

class Pessoa {
  #nome
  #idade
  #imc
  #altura
  #peso
  #pessoaController
  #table
  #element

  get altura () {
    return this.#altura ??= ''
  }

  get idade () {
    return this.#idade ??= ''
  }

  get imc () {
    return this.#imc ??= this.pessoaController?.imc
  }

  get nome () {
    return this.#nome ??= ''
  }

  get peso () {
    return this.#peso ??= ''
  }

  get pessoaController () {
    return this.#pessoaController ??= PessoaController.create(this)
  }

  get table () {
    return this.#table ??= Table.create(this)
  }

  get element () {
    return this.#element ??= this.table.table
  }

  constructor () {
    this.#altura = document.querySelector('.height').value
    this.#idade = document.querySelector('.age').value
    this.#nome = document.querySelector('.name').value
    this.#peso = document.querySelector('.kg').value
  }

  static create () {
    return new Pessoa()
  }
}

export default Pessoa
