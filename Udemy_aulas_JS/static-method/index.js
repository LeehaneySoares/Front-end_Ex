class Pessoa {
  #nome
  #sobrenome
  #idade

  get nome () {
    return this.#nome
  }

  get sobrenome () {
    return this.#sobrenome
  }

  get idade () {
    return this.#idade
  }

  constructor (nome, sobrenome, idade) {
    this.#nome = nome
    this.#sobrenome = sobrenome
    this.#idade = idade
  }

  fazAniversario () {
    this.#idade++
    console.log(`${this.nome} agora está com: ${this.idade} anos.`)
    Pessoa.digaOi()
    return this
  }

  nomeCompleto () {
    return `${this.nome} ${this.sobrenome}`
  }

  static digaOi () {
    return console.log('Oi')
  }
}

const p1 = new Pessoa('Leehaney', 'Soares', 25)

p1.fazAniversario()
p1.fazAniversario()
p1.fazAniversario()
p1.fazAniversario()

