// Funções de primeira classe e ordem maior

function produto (nome, preco) {
  return `O nome do produto é: ${nome} e seu preco é: ${preco}`
}

const functionTeste = produto('caneca', 25)

console.log(functionTeste)

const obj = {
  teste: produto('camiseta', 30)
}

console.log(obj.teste)

const array = new Array()
const nomeProdutos = ['caneta', 'camiseta', 'caderno', 'caneca']
const precoProdutos = [5, 40, 25, 40]

for (let i = 0; i < 3; i++) {
  array.push(produto(nomeProdutos[i], precoProdutos[i]))
}

console.log(array)
