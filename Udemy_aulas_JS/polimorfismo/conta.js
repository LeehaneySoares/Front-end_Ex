// SuperClass
function Conta (agencia, conta, saldo) {
  Object.defineProperties(this, {
    agencia: {
      enumerable: true,
      get: () => agencia,
      set: (value) => agencia = value,
      configurable: false
    },
    conta: {
      enumerable: true,
      get: () => conta,
      set: (value) => conta = value,
      configurable: false
    },
    saldo: {
      enumerable: true,
      get: () => saldo,
      set: (value) => saldo = value,
      configurable: false
    }
  })
}

Conta.prototype.sacar = function (value) {
  if (typeof value != 'number') return 'Esse valor não é válido'
  if (this.saldo >= value) {
    this.saldo -= value
    return `Saque realizado com sucesso, seu saldo atual: R$ ${this.saldo}`
  } else {
    return `Saldo insuficiente, seu saldo é de: R$ ${this.saldo}`
  }
}

Conta.prototype.depositar = function (value) {
  if (typeof value !== 'number') return 'Esse valor não é válido'
  this.saldo += value
  return 'Valor depositado com sucesso!'
}

Conta.prototype.verSaldo = function () {
  return `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo}`
}

export default Conta
