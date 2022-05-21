/**
 * DefineProperty
 */

function Produto (nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'preco', {
    enumerable: true,
    value: preco,
    writable: false,
    configurable: true
  })

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostrar valor ao debugar ?
    value: estoque, // Adiciona qualquer coisa, function, object, variáveis, parâmetros, etc...
    writable: true, // Posso reescrever (true ou false) ?
    configurable: true // Posso reconfigurar (true ou false) ?
  })

  Object.defineProperty(this, 'preco', {
    value: function () {
      return `${this.nome} custa: 2000`
    }
  })
}

const p1 = new Produto('Notebook', 2000, 5)
p1.estoque = 10
console.log(p1.preco())
