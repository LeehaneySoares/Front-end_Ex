// const robo = {
//   perna: 2,
//   bracos: 4,
//   atirar: () => console.log('pew pew pew')
// }

// const bracos = 'bracos'

// console.log(robo.perna)
// console.log(robo[bracos])
// console.log(robo.bracos)
// robo.atirar()

// const pirata1 = new Object()

// pirata1.nome = 'Monkey D. Luffy'
// pirata1.fruta = 'Akuma no mi: Gomu Gomu no mi'
// pirata1.ataque = () => console.log('Gomu gomu no jet pistol!')

// console.log(pirata1.nome)
// console.log(pirata1.fruta)
// pirata1.ataque()

// delete pirata1.fruta

// console.log(pirata1)

/**
 * factory functions / constructor functions -> São padrões de projeto!!
 *
 */

function criaPessoa (nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
    get nomeCompleto () {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}


const p1 = criaPessoa('Leehaney', 'Soares', 24)

console.log(p1.nome, p1.sobrenome, p1.idade, p1.nomeCompleto)

function Pessoa (nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
  this.aniversario = () => 2022 - this.idade
  Object.freeze(this)
}

const p2 = new Pessoa('Leehaney', 'Soares', 25)
console.log(p2.nome, p2.idade)
p2.nome = 'Taylor'
console.log(p2.nome)
p2.idade = 50
console.log(p2.nome, p2.idade)
