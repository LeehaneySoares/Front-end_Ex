function pessoa (nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
    nomeCompleto () {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}

export { pessoa as teste }
