/*
 * método filter, para filtrar um valor de uma array e retornar outro Array
 */

const numeros = [1, 2, 3, 4, 5, 12, 34, 45, 33, 32, 22, 56, 72, 65]

function callbackFilter (valor) {
  return valor > 10
}

/**
 * Ao passar minha function como argumento do filter eu não estou executando, visto que
 * o primeiro parâmetro do filter é uma função de callback, com isso eu passo apenas a referência dela.
 */
const newNumbers = numeros.filter(callbackFilter).sort()

console.log(newNumbers)
