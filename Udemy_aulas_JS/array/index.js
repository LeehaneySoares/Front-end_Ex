// const notas = [10, 6, 8]

// const newNotas = [...notas]
// newNotas.unshift(7)

// console.log(newNotas)

// function sum(u = -1, v = 0, x = 1, y = 2, z = 3) {
//   return u + v + x + y + z
// }

// const num = [3, 4, 5]
// const params = [1, 2, ...num]
// console.log(sum(...params))

/**
 * Desconstruction
 */
const [x, y] = ['a', 'b']

console.log(x, y)

/**
 * Swap
 */

const [a, b] = [y, x]

console.log(a, b)

/**
* TODO:// Apenas testando a função copyWithin()
*/
const numbers = [1, 2, 3, 4, 5]
const otherNumber = [6, 7, 8, 9]
const newArray = numbers.copyWithin(1, 3)

console.log(newArray)
