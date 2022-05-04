'use strict'

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
  { nome: 'Wallace', idade: 47 },
]

const nomes = pessoa.map(item => item.nome)
const removeChaveNome = pessoa.map(item => ({ nome: '' }))
const adcId = pessoa.map((valor, index) => {
  const newObj = { ...valor, id: index} // criando um novo objeto para não alterar o original :)
  return newObj
})

/**
 * Ao abrir () em uma função a enginne do JS passa a olhar o que vem depois das arrows como um expressão
 * e não as { } da função, isso quando preciso retornar valores de um objeto, ou seubstituir
 */

console.log(nomes, removeChaveNome, adcId, pessoa)
