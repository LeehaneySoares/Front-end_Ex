/**
 * Utilizando getters e setters nas funções construturas (Constructor functions)
 * Precisamos do Object.defineProperty()
 */

function VideoGame (marca, modelo, rom, tela, ...jogos) {
  Object.defineProperties(this, {
    marca: {
      get: () => marca,
      set: (value) => marca = value.replace('', '')
    },
    modelo: {
      get: () => modelo,
      set: (value) => modelo = value
    },
    rom: {
      get: () => rom,
      set: (value) => rom = value
    },
    tela: {
      get: () => tela,
      set: (value) => tela = value
    },
    jogos: {
      get: () => jogos.forEach(item => console.log(item)),
      set: (value) => jogos.push(value)
    }
  })
}

const jogosNintendo = ['Mario', 'Dedroid', 'Donkey Kong', 'Sonic the headhog']

const game1 = new VideoGame('Nintendo', 'Switch lite', 32, 'Tela OLED', ...jogosNintendo)

game1.marca = 'Nitendo NY'
console.log(game1.marca)
console.log(game1.modelo)
console.log(game1.rom)
console.log(game1.tela)
game1.jogos = 'Mario 3d land'
game1.jogos = 'Sonic Colors'
game1.jogos = 'The legend of Zelda'
console.log('-----------------***------------------')
game1.jogos
console.log('-----------------***------------------')

const jogosXbox = ['Sunset Overdrive', 'Alan Awake', 'Gears of War', 'Forza Horizon']

const game2 = new VideoGame('Microsoft', 'Xbox series S', 500, 'Depende da Televisão', ...jogosXbox)

console.log(game2.marca)
console.log(game2.modelo)
console.log(game2.rom)
console.log(game2.tela)
game2.jogos = 'State of decay'
game2.jogos = 'Control'
game2.jogos = 'Battlefield 5'
game2.jogos = 'Dead cells'
console.log('---------***--------------')
game2.jogos
console.log('-----------------***------------------')
