// const robo = {
//   perna: 2,
//   bracos: 4,
//   atirar: () => console.log('pew pew pew')
// }

// const bracos = 'bracos'

// console.log(robo.perna)
// console.log(robo[bracos])
// console.log(robo.bracos)
// robo.atirar()

const pirata1 = new Object()

pirata1.nome = 'Monkey D. Luffy'
pirata1.fruta = 'Akuma no mi: Gomu Gomu no mi'
pirata1.ataque = () => console.log('Gomu gomu no jet pistol!')

console.log(pirata1.nome)
console.log(pirata1.fruta)
pirata1.ataque()

delete pirata1.fruta

console.log(pirata1)

