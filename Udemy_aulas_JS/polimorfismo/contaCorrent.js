import Conta from './conta.js'

function ContaCorrente (agencia, conta, saldo, pacote) {
  Conta.call(this, agencia, conta, saldo)
  Object.defineProperty(this, 'pacote', {
    enumerable: true,
    get: () => pacote,
    set: (novoPacote) => pacote = novoPacote,
    configurable: false
  })
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (value) {
  if (value > 1000) {
    return `Saque não efeutado, limite de saque é de: R$ 1.000,00`
  }
  else {
    this.saldo -= value
    return `Saque efetuado com sucesso! Saldo atual: R$ ${this.saldo.toFixed(2)}`
  }
}

const conta1 = new ContaCorrente(7131, 249620, 5000)

console.log(conta1.sacar(1000))
