import Conta from './conta.js'

function ContaPoupanca (agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const cp = new ContaPoupanca(1234, 543212, 2000)

console.log(cp.sacar(2000))
