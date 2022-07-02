/**
 * PROMISES!
 * trabalhando com dados assincronos
 */

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

// // esperaAi('frase 1', randomTime(1, 3))
// // esperaAi('frase 2', randomTime(1, 3))
// // esperaAi('frase 3', randomTime(1, 3))
// // esperaAi('frase 4', randomTime(1, 3))

// esperaAi('frase 1', randomTime(1, 3))
//   .then((response) => (
//     console.log(response),
//     esperaAi('Frase 2', randomTime(1, 3))
//   ))
//   .then(response => (
//     console.log(response),
//     esperaAi('frase 3', randomTime(1, 4))
//   ))
//   .then(response => console.log(response))
//   .catch(error => console.log(error))

/**
 * Métodos uteis para se trabalhar com Promises
 */

//Promise All

// const teste = [
//   'Valor qualquer',
//   esperaAi('Promise 1', randomTime(1, 2)),
//   esperaAi('Promise 2', randomTime(1, 2)),
//   esperaAi('Promise 3', randomTime(1, 5)),
//   'Outro valor qualquer'
// ]

// Promise.all(teste)
//   .then(response => console.log(response))

//Promise race


const promise = [
  esperaAi('Eu sou a promise 1', randomTime(1, 5)),
  esperaAi(1997, randomTime(1, 5)),
  esperaAi('Eu sou a promise 3', randomTime(1, 2)),
]

Promise.race(promise)
  .then(response => console.log(response))
  .catch(error => console.log(error))

