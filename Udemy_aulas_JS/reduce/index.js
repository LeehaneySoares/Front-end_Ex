/*
 *  Reduce, utilizado para reduzir o array em um único elemento
 *  O reduce recebe como parâmetro (acumulador, item, index, array)
 *  O acumulador sempre precisa ser retornado na function
 */


/**
 * TODO: exemplo de uso:
 */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 34]

const newArray = numeros.reduce((acc, item) => {
  return acc += item
}, 0)

/**
 * Exercício
 */

// Retornar os valores pares

const pares = numeros.reduce((acc, item) => {
  item % 2 == 0 ? acc.push(item) : ''
  return acc
}, [])

//console.log(pares)

// Retornar o dobro

const dobro = numeros.reduce((acc, item) => {
  acc.push(item * 2)
  return acc
}, [])

//console.log(dobro)

const pessoa = [
  { nome: 'Leehaney', idade: 24 },
  { nome: 'Valmira', idade: 22 },
  { nome: 'Taylor', idade: 10 },
  { nome: 'Betania', idade: 48 },
  { nome: 'Jubileu', idade: 60 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const maisVelha = pessoa.reduce((acc, item) => {
  if (acc.idade > item.idade) return acc
  return item
})


console.log(maisVelha)
