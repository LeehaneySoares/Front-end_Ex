// function Pessoa (nome, sobrenome, idade) {
//   this.nome = nome
//   this.sobrenome = sobrenome
//   this.idade = idade
// }

// Pessoa.prototype.nomeCompleto = () => 'Cópia >>> Leehaney Soares'

// const p1 = new Pessoa ('Leehaney', 'Soares', 25)
// const data = new Date()

// console.log(p1.nomeCompleto())

// console.log(Pessoa.prototype === p1.__proto__) // true -> São iguais tanto em conteúdo, quanto em tipos

// Pessoa.prototype.calc = (x, y) => x + y // atribuindo uma function ao __proto__ do obj Pessoa

// /**
//  * TODO: Criando uma função que retorna o ano de nascimento da pessoa,
//  * deixando "Invisível na class", mas visível dentro de seu __proto__ (prototype)
//  */
// Pessoa.prototype.anoNasc = (year, age) => year - age


// /**
//  * Não recomendado fazer issoa, apenas para fins didáticos
//  */
// Pessoa.prototype.toString = () => 'Não sou a função toString nativa'

// console.dir(p1)
// console.dir(data)

// const anoAtual = data.getFullYear()

// console.log(p1.calc(5, 6))
// console.log(p1.anoNasc(anoAtual, p1.idade))
// console.log(p1.toString())

// function Circle (string) {
//   this.str = string
// }

// const shape = {}
// const circle = new Circle('teste')

// /**
//  * Outra forma de atribuir algum dado no proto é utilizando __proto__, mas não é recomendado.
//  * Mas, dá pra fazer!
//  */
// // shape.__proto__.circle = circle

// // console.log(shape)

// // function OtherObj () {
// // }

// // const obj = { nome: 'Teste', action: 'Eu vou para o proto' }
// // const newObj = new OtherObj()

// // newObj.__proto__.obj = obj

// // console.log(newObj)


// function Aluno (ra, nome, disciplinas, sala) {
//   this.ra = ra
//   this.nome = nome
//   this.disciplinas = disciplinas
//   this.sala = sala

//   this.action = () => 'Estudando computação....'
// }

// Aluno.prototype.action = () => 'Não estou estudando e sim Procrastinando ;P'

// const disciplinas = ['engenharia de computadores', 'lógica de programação', 'banco de dados', 'POO']

// const aluno1 = new Aluno (12345, 'Leehaney', disciplinas, 10)

// console.log(aluno1.action())


// /**
//  * Setando prototypes em determinados objetos
//  */
// const objA = {
//   chave: 'A',
//   teste: () => console.log('Faço parte de A')
// }

// const objB = {
//   chave: 'B',
//   fake: 'Fake'
// }

// const objC = {
//   chave: 'C'
// }

// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)

function Produto (nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto ('camiseta', 40)

p1.desconto(50)

const p2 = {
  nome: 'caneca',
  preco: 20
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(20)

console.log(p2)
