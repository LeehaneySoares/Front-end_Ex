/**
 * TODO: Herança (
  * --> O que todos esses itens abaixo tem em incomum ? São Produtos!
  * Produto: -> cor, material, ano de fabricação, nome, preço, entre outros.
  *
  * --> Camiseta, Caneca, Carro, Computador (Todos São Produtos)
 * )
 */

// carro = ano, cor
// Caneca = material

// Nossa Super Class
function Produto (nome, preco) {
  this.nome = nome
  this.preco = parseFloat(preco)
}
Produto.prototype.aumento = function (quantia) {
  return this.preco += quantia
}
Produto.prototype.desconto = function (quantia) {
  return this.preco -= quantia
}

function Carro (nome, preco, ano, cor) {
  Produto.call(this, nome, preco) // é igual a --> super()
  this.ano = ano
}

//Funciona também, ele herdou o prototype de produto, mas o contructor não é Carro e sim de Produto
// Carro.prototype = Produto.prototype

Carro.prototype = Object.create(Produto.prototype)
Carro.prototype.constructor = Carro

//Subscrevendo o método automento e desconto em Carro

Carro.prototype.aumento = function (percentual) {
  return this.preco = this.preco + (this.preco * (percentual / 100))
}

Carro.prototype.desconto = function (percentual) {
  return this.preco = this.preco - (this.preco * (percentual / 100))
}

const carro1 = new Carro('HB20', 40000, 2021)

// carro1.aumento(20)
carro1.desconto(50)


console.log(carro1)
