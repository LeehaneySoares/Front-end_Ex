class EntradaSaida {
  continuar () {
    return prompt('Digite S ou s para sair: ');
  }

  static create () {
    return new EntradaSaida
  }
}

export default EntradaSaida
