class Operacao {
  #resultado

  get resultado () {
    return this.#resultado ??= ''
  }

  constructor (n1, n2, op) {
    this.calcular(n1, n2, op)
  }

  calcular (n1, n2, op) {
    switch (op) {
      case '+':
        this.#resultado = `A soma é: ${n1 + n2}`
      break;
      case '-':
        this.#resultado = `A subtração é: ${n1 - n2}`
      break;
      case '*':
        this.#resultado = `A multiplicação é: ${n1 * n2}`
      break;
      case '/':
        n2 != 0
          ? this.#resultado = `A divisão é: ${n1 / n2}`
          : this.#resultado = 'Divisão por zero'
          break
      default:
        this.#resultado = 'Operação não realizada'
      break
    }
    return this.resultado
  }
}

export default Operacao
