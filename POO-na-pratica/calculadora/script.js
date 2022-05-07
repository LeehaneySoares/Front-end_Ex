const n1 = parseInt(prompt('Digite o primeiro número:'))
const n2 = parseInt(prompt('Digite o segundo número:'))
const sinal = prompt('Qual operação deseja realizar: +, -, * ou / ?')

console.log(`${eval(`${n1}${sinal}${n2}`)}`)
