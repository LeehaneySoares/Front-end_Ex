class ExibeMensagem {
  #message

  get message () {
    return this.#message ??= ''
  }

  recebeMensagem (msg) {
    this.#message = msg
    return alert(this.message)
  }
}

export default ExibeMensagem
