/**
 *
 * Trabalhando com asyncs e awaits
 *
 * @param {*} max
 * @param {*} min
 * @returns
 */

class Teste {
  #nome
  #sobrenome

  get nome () {
    return 'Leehaney'
  }

  get sobrenome () {
    return 'Soares'
  }

  changeValue (value) {
    console.log(value)
    return this
  }

  static create () {
    return new Teste()
  }
}

const randomTime = (max, min) => (
  max *= 1000,
  min *= 1000,
  (Math.random() * (max + min) - min)
)

function esperaAi (msg, tempo) {
  return new Promise((resolve, reject) =>
    setTimeout(() =>
      typeof msg !== 'string'
        ? reject(new Error('A mensagem precisa ser uma string'))
        : resolve(msg),
    tempo)
  )
}

async function handle () {
  try {
    const teste1 = await esperaAi('promise 1 - Passei', randomTime(1, 5))
    const teste2 = await esperaAi('promise 2 - passei', randomTime(1, 5))
    teste.changeValue(teste1)
    teste.changeValue(teste2)
    const teste3 = await esperaAi(1997, randomTime(1, 5))
    teste.changeValue(teste3)

  } catch (error) {
    console.log(error)
  }

  return 'Terminou'
}

const teste = Teste.create()
handle()
