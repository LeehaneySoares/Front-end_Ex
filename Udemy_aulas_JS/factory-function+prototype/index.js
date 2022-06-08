// /**
//  * Utilizando prototypes em factory functions
//  */

// function pessoa (nome, sobrenome, idade) {
//   const proto = {
//     nomeCompleto () {
//       return `${nome} ${sobrenome}`
//     },
//     anoNasc () {
//       const anoAtual = new Date().getFullYear()
//       return anoAtual - idade
//     },
//     falar () {
//       return `Olá, eu sou o ${nome}`
//     }
//   }

//   return Object.create(proto, {
//     nome: { get: () => nome },
//     sobrenome: { get: () => sobrenome },
//     idade: { value: () => idade }
//   })
// }

// const p1 = pessoa('Leehaney', 'Soares', 25)

// console.log(p1.nome)


function carro (modelo, ano, cor) {
  const carroPrototype = {
    acelerar () {
      return 'Vrruuuuum!!'
    },
    frear () {
      return 'Carro freou!'
    },
    get modelo () {
      return modelo
    },
    get ano () {
      return ano
    },
    get cor () {
      return cor
    }
  }

  return Object.create(carroPrototype)
}

const c1 = carro('HB20', 2022, 'preto')

console.log(c1)
