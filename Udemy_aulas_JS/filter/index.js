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

/*
 * O Filter sempre retorna um array valores menor ou igual ao array original, porém com os valores filtrados
 */


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

const moreFiveLetters = pessoa.filter(person => person.nome.length >= 5 )
const moreFiftyAge = pessoa.filter(person => person.idade > 50)
const finishA = pessoa.filter(person => person.nome.endsWith('a'))

/*
  * A Função endsWith() varre uma string e verifica se existe o que passarmos por parâmetro,
  * no meu caso precisei verificar a letra 'a', mas podemos passar números, entre outros.
*/

console.log(moreFiveLetters, moreFiftyAge, finishA)

