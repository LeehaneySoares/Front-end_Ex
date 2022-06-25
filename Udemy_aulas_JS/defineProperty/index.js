function Pessoa (nome, sobrenome, idade) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
     get: () => nome,
     set: (value) => nome = value
    },
    sobrenome: {
      enumerable: true,
      get: () => sobrenome,
      set: (value) => sobrenome = value
    },
    idade: {
      enumerable: true,
      get: () => idade,
      set: (value) => idade = value
    }
  })

}

const p1 = new Pessoa('leehaney', 'Soares', 25)

p1.set('Leehaney')
