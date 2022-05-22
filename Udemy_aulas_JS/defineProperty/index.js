/**
 * DefineProperty
 */

function Pessoa (nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
  this.anoNasc = (ano) => ano - this.idade
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

  Object.defineProperty(this, 'nome', {
    enumerable: true,
    value: nome,
    writable: false,
    configurable: true
  })

  /**
   *
   *
   *
   *
   *
   *
   */

  Object.defineProperty(this, 'nome', {
    enumerable: false,
    value: nome,
    writable: true,
    configurable: false
  })
}

const p1 = new Pessoa ('Leehaney', 'Soares', 24)
// console.log(p1.sobrenome)
// console.log(p1.anoNasc(new Date().getFullYear()))
// console.log(p1.nomeCompleto())

const keys = Object.keys(p1) // Joga as chaves de um objeto dentro de um array, para que possa ser iterável

for (let chave of keys) {
  console.log(chave)
}

