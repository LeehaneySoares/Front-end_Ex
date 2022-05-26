function Pessoa (nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

// Pessoa.prototype.nomeCompleto = () => 

const p1 = new Pessoa ('Leehaney', 'Soares', 25)
const data = new Date()

console.log(Pessoa.prototype === p1.__proto__) // true -> São iguais tanto em conteúdo, quanto em tipos

Pessoa.prototype.calc = (x, y) => x + y // atribuindo uma function ao __proto__ do obj Pessoa

/**
 * TODO: Criando uma função que retorna o ano de nascimento da pessoa,
 * deixando "Invisível na class", mas visível dentro de seu __proto__ (prototype)
 */
Pessoa.prototype.anoNasc = (year, age) => year - age


/**
 * Não recomendado fazer issoa, apenas para fins didáticos
 */
Pessoa.prototype.toString = () => 'Não sou a função toString nativa'

console.dir(p1)
console.dir(data)

const anoAtual = data.getFullYear()

console.log(p1.calc(5, 6))
console.log(p1.anoNasc(anoAtual, p1.idade))
console.log(p1.toString())