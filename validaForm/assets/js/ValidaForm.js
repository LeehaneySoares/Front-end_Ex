import ValidaCPF from './ValidaCPF.js'
import { $, all as getAll} from './shortCut.js'

class ValidaForm {
  #inputs
  #form
  #valid
  #user
  #message
  #password
  #passwordReplay

  get cpf () {
    return $('.cpf').value
  }

  get inputs() {
    return this.#inputs
  }

  get form() {
    return this.#form ??= $('.formulario')
  }

  get cpfValid () {
    return ValidaCPF.create(this.cpf)
  }

  get message () {
    return this.#message ??= ''
  }

  get user () {
    return this.#user ??= ''
  }

  constructor() {
    this.events()
  }

  addRequired() {
    this.inputs.forEach((input) => {
      const label = input.previousElementSibling.innerHTML
      this.#message = `O campo "${label}" não pode estar em branco*`
      !input.value
        ? this.showMessageError(input, this.message)
        : this.#valid
    })
    return this.#valid
  }

  events() {
    this.#inputs = getAll(this.form, 'input')
    this.form.addEventListener('submit', event => this.handleSubmit(event))
    return this
  }

  handleSubmit(event) {
    event.preventDefault()
    this.rewind()
    const required = this.addRequired()
    const cpf = this.validCPF()
    const user = this.validUser()
    const password = this.validPassword()

    required && cpf && user && password
      ? this.form.submit()
      : this
    return this
  }

  haveLetterAndNumbers (user, input) {
    this.#message = 'Nome de usuário deve conter apenas letras e/ou números'
    user.match(/^[a-zA-Z0-9]+$/g)
      ? this.#valid = true
      : this.showMessageError(input, this.message)
    return this.#valid
  }

  rewind () {
    getAll(this.form, '.error__message')
      .forEach(error => error.remove())
    return this
  }

  showMessageError (input, message) {
    const div = document.createElement('div')
    div.classList.add('error__message')
    div.innerHTML = message
    input.insertAdjacentElement('afterend', div)
    this.#valid = false
    return this.#valid
  }

  validCPF () {
    const input = $('.cpf')
    this.#valid = this.cpfValid.valid()
    if (this.#valid === true) {
      return this.#valid
    } else {
      this.cpfValid.showMessage(input, this.#valid)
    }
  }

  validUser () {
    const input = $('.usuario')
    this.#user = input.value
    this.#message = 'O usuário deve ter entre 3 à 12 caracteres'
    this.#user.length >= 3 && this.#user.length <= 12
      ? this.#valid = true
      : this.showMessageError(input, this.message)
    this.haveLetterAndNumbers(this.#user, input)
    return this.#valid
  }

  validPassword () {
    const pass1 = $('.senha')
    const pass2 = $('.repetir-senha')
    this.#password = pass1.value
    this.#passwordReplay = pass2.value
    this.#message = 'A senha deve ter entre 6 à 12 caracteres'
    if (this.#password.length < 6 || this.#password.length > 12) {
      this.#valid = true
      this.showMessageError(pass1, this.message)
    }
    if (this.#passwordReplay.length < 6 || this.#passwordReplay.length > 12) {
      this.#valid = true
      this.showMessageError(pass2, this.message)
    }
    this.passDifferent(this.#password, this.#passwordReplay, pass2)
    return this.#valid
  }

  passDifferent (pass1, pass2, input) {
    this.#message = 'A senhas devem ser iguais'
    pass1 === pass2
      ? this.#valid = true
      : this.showMessageError(input, this.message)
    return this.#valid
  }

  static create() {
    return new ValidaForm()
  }
}

export default ValidaForm
