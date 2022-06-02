import EntradaSaida from './EntradaSaida.js'
import Operacao from './Operacao.js'
import ExibeMensagem from './ExibeMensagem.js'

function calculadora () {
  const message = new ExibeMensagem()
  const entradaSaida = new EntradaSaida()

  message.recebeMensagem('Calculadora sem OO')

  while (true) {
    const resposta = entradaSaida.continue()

    if (resposta === 'S' || resposta === 's') break

    /**
     * Método estático para capiturar valores
     */
    entradaSaida.captureValue()

    const op = new Operacao(
      entradaSaida.n1,
      entradaSaida.n2,
      entradaSaida.operation
    )

    message.recebeMensagem(op.resultado)
  }
}

calculadora()
