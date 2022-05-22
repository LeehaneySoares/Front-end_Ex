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

// const p1 = new Pessoa ('Leehaney', 'Soares', 24)
// // console.log(p1.sobrenome)
// // console.log(p1.anoNasc(new Date().getFullYear()))
// // console.log(p1.nomeCompleto())

// const keys = Object.keys(p1) // Joga as chaves de um objeto dentro de um array, para que possa ser iterável

// for (let chave of keys) {
//   console.log(chave)
// }

/**
 * DefineProperties
 */

function Robo (modelo, qtPernas, qtBracos) {
  this.modelo = modelo
  this.pernas = qtPernas
  this.bracos = qtBracos
  this.atira = () => 'pew pew pew (0011010101)'

  Object.defineProperties(this, {
    pernas: {
      enumerable: true,
      value: qtPernas,
      writable: false,
      configurable: true
    },
    bracos: {
      enumerable: true,
      value: qtBracos,
      writable: false,
      configurable: true
    },
    atira: {
      enumerable: false
    }
  })
}

const r1 = new Robo ('Ajax', 2, 4)


r1.pernas = 30
r1.bracos = 20
r1.bracos = 40

console.log(r1)
console.log(r1.atira())
