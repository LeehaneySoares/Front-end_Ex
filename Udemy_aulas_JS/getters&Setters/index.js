const _velocidade = Symbol('velocidade')

class Carro {
  get velocidade () {
    this[_velocidade] ??= 2000
    return console.log(this[_velocidade])
  }

  set velocidade (value) {
    this[_velocidade] = value
  }
}

const c1 = new Carro()
c1.velocidade
// console.log(c1.velocidade)
