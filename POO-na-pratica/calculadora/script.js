import EntradaSaida from "../EntradaSaida.js"

function calculadora () {
  alert('Calculadora sem OO')

  const entradaSaida = EntradaSaida.create() // new EntradaSaida()

  let res = entradaSaida.continuar();

  console.log(res)

  // while (true) {
  //   res = prompt('Digite S ou s para sair: ')
  //   if (res === 'S' || res === 's') break;

  //   const n1 = parseFloat(prompt('Digite o primeiro número: '))
  //   const n2 = parseFloat(prompt('Digite o segundo número: '))
  //   const op = prompt('Digite qual operação deseja realizar -> (+, -, * ou /): ')

  //   let resultado = 0;
  //   let msg = '';
  //   switch (op) {
  //     case '+':
  //       resultado = n1 + n2
  //       console.log(`A soma é: ${resultado}`)
  //     break;
  //     case '-':
  //       resultado = n1 - n2;
  //       console.log(`A subtração é: ${resultado}`)
  //     break;
  //     case '*':
  //       resultado = n1 * n2;
  //       console.log(`A multiplicação é: ${resultado}`)
  //     break;
  //     case '/':
  //       if (n2 != 0) {
  //         resultado = n1 / n2
  //         console.log(`A divisão é: ${resultado}`)
  //         return msg
  //       } else {
  //         resultado = 999999999;
  //         console.log('Divisão por zero')
  //         break
  //       }
  //     default:
  //       msg = 'Operação não realizada'
  //     break
  //   }
  // }
}

calculadora()
