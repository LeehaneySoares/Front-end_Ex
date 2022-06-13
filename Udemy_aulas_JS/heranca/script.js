// /**
//  * TODO: Herança (
//   * --> O que todos esses itens abaixo tem em incomum ? São Produtos!
//   * Produto: -> cor, material, ano de fabricação, nome, preço, entre outros.
//   *
//   * --> Camiseta, Caneca, Carro, Computador (Todos São Produtos)
//  * )
//  */

// // carro = ano, cor
// // Caneca = material

// // Nossa Super Class
// function Produto (nome, preco) {
//   this.nome = nome
//   this.preco = parseFloat(preco)
// }
// Produto.prototype.aumento = function (quantia) {
//   return this.preco += quantia
// }
// Produto.prototype.desconto = function (quantia) {
//   return this.preco -= quantia
// }

// function Carro (nome, preco, ano, cor) {
//   Produto.call(this, nome, preco) // é igual a --> super()
//   this.ano = ano
//   this.cor = cor
// }

// //Funciona também, ele herdou o prototype de produto, mas o contructor não é Carro e sim de Produto
// // Carro.prototype = Produto.prototype

// Carro.prototype = Object.create(Produto.prototype)
// Carro.prototype.constructor = Carro

// //Sobescrevendo o método automento e desconto em Carro

// Carro.prototype.aumento = function (percentual) {
//   return this.preco = this.preco + (this.preco * (percentual / 100))
// }

// Carro.prototype.desconto = function (percentual) {
//   return this.preco = this.preco - (this.preco * (percentual / 100))
// }

// // const carro1 = new Carro('HB20', 40000, 2021, 'vermelho')

// // // carro1.aumento(20)
// // carro1.desconto(50)


// // console.log(carro1)

// function Caneca (nome, preco, material, estoque) {
//   Produto.call(this, nome, preco)

//   Object.defineProperties(this, {
//     material: {
//       enumerable: true,
//       get: () => material,
//       set: (value) => typeof value != 'string' ? false : material = value,
//       configurable: false
//     },
//     estoque: {
//       enumerable: true,
//       get: () => estoque,
//       set: (value) => typeof value != 'number' ? false : estoque = value,
//       configurable: false
//     }
//   })
// }
// Caneca.prototype = Object.create(Produto.prototype)
// Caneca.prototype.constructor = Caneca

// /**
//  * Vendo se conseguimos atribuir métodos que estão no prototype de outras constructor function
//  * em uma nova constructor function diferente
//  */

// Caneca.prototype.aumento = Carro.prototype.aumento
// Caneca.prototype.desconto = Carro.prototype.desconto

// const caneca = new Caneca('Caneca', 25, 'porcelana', 5)

// // caneca.aumento(20)

// //Naõ seta esses valor por conta da verificação dentro do método setter
// caneca.estoque = '100'
// caneca.material = 4234242

// console.log(caneca)

class DispositivoEletronico {
  #nome
  #isOn
  get nome () {
    return this.#nome
  }

  get isOn () {
    return this.#isOn
  }

  constructor (nome, isOn) {
    this.#nome = nome
    this.#isOn = isOn
  }

  ligar () {
    if (!this.isOn) return console.log(`${this.nome} está ligado`)
    this.#isOn = true
    return this
  }

  desligar () {
    if (this.isOn) return console.log(`${this.nome} já está desligado`)
    this.#isOn = true
    return this
  }
}

// o Super já passa todos os parâmetros automatiamente
// Iremos utilizar o super quando queremos passar algo específico
class Celular extends DispositivoEletronico {}

const d1 = new Celular('Samsung s10+', false)

d1.desligar()
d1.desligar()

console.log(d1)



