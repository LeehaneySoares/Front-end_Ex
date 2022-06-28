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
    typeof msg !== 'string'
      ? reject(new Error('A mensagem precisa ser um string'))
      : setTimeout(() => resolve(msg), tempo)
  )
}

// esperaAi('frase 1', randomTime(1, 3))
// esperaAi('frase 2', randomTime(1, 3))
// esperaAi('frase 3', randomTime(1, 3))
// esperaAi('frase 4', randomTime(1, 3))

esperaAi('frase 1', randomTime(1, 3))
  .then((response) => (
    console.log(response),
    esperaAi('Frase 2', randomTime(1, 3))
  ))
  .then(response => (
    console.log(response),
    esperaAi('frase 3', randomTime(1, 4))
  ))
  .then(response => console.log(response))
  .catch(error => console.log(error))

