// const produto = {
//   nome: 'VideoGame',
//   capacidade: '500 GB',
//   jogos: ['Watch Dogs', "Assassin's creed", 'Sonic', 'Huugy wuggy']
// }

// const newProduto = { ...produto }
// newProduto.nome = 'Celular'

// // console.log(newProduto)
// // console.log(produto)

// const newObj = {
//   nome: 'Leehaney',
//   sobrenome: 'Soares'
// }

// const outroObj = {
//   last: 'Nazaré',
//   idade: 25
// }

// const assign = { ...newObj, ...outroObj }

// const produto = { nome: 'caneca', estoque: 5, material: 'Porcelana' }
// Object.defineProperty(produto, 'estoque', {
//   enumerable: true,
//   writable: false,
//   configurable: false
// })

// produto.estoque = 50000
// console.log(Object.getOwnPropertyDescriptor(produto, 'estoque'))
// console.log(produto)

// const obj = { nome: 'Leehaney', sobrenome: 'Soares', idade: 24 }

// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// for (let [key, value] of Object.entries(obj)) {
//   console.log({ [key]: value })
// }