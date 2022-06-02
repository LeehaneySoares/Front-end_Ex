class EntradaSaida {
  #n1
  #n2
  #operation

  get n1 () {
    return this.#n1 ??= ''
  }

  get n2 () {
    return this.#n2 ??= ''
  }

  get operation () {
    return this.#operation ??= ''
  }

  captureValue () {
    this.#n1 = parseInt(prompt('Digite o primeiro número: '))
    this.#n2 = parseInt(prompt('Digite o segundo número: '))
    this.#operation = prompt('Digite qual operação deseja realizar -> (+, -, * ou /): ')
    return this
  }

  continue () {
    return prompt('Digite S ou s para sair: ');
  }
}

export default EntradaSaida
