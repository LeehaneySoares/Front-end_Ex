/*
 *  retorne a soma do dobro dos pares
 * -> filtar pares
 * -> dobrar os valores
 * -> reduzir (somar tudo)
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 34]

const pares =
  numeros
    .filter(item => item % 2 == 0)
    .map(item => item * 2)
    .reduce((acc, item) => {
      acc += item
      return acc
    })

console.log(pares)
