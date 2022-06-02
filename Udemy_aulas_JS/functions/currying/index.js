// Currying (técninca)

// function soma (a) {
//   return function (b) {
//     return a + b
//   }
// }

// const curry = soma(2)

// console.log(curry(2))
// console.log(curry(4))
// console.log(curry(6))
// console.log(curry(8))
// console.log(curry(10))


/**
 * Criando tabuadas com técnicas de currying
 * @param {x}
 * @returns
 */
function tabuada (x) {
  return function (y) {
    return x * y
  }
}

const value = 5

const result = tabuada(value)

console.log(result(2))

for (let i = 0; i <= 10; i++) {
  //console.log(`${value} x ${i} = ${result(i)}`)
}


