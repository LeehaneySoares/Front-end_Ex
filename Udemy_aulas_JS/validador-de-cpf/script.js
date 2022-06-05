/**
 * A regra do algorítmo gera em torno de multiplicar os 9 primeiro dígitos
 * por uma sequência decrescente de 10 à 2 -> (10, 9, 8, 7 ... 2)
 * Exemplo: 123. 456. 789 - 12
 *
 * (1 x 10, 2 x 9, 3 x 8) -> primeiro centena do CPF
 * (4 x 7, 5 x 6, 6 x 5) -> segunda centena do CPF
 * (7 x 4, 8 x 3, 9 x 2 ) -> terceira centena do CPF
 *
 * Após multiplicar as casas, devemos somar o resultado de cada centena obtida
 *
 * Formula: 11 - ({ total do calculo de cima } % 11) = { primeiro dígito obtido }
 *
 * TODO: o resultado da formula acima não pode ser > que 9, caso seja o resultado é: 0
 *
 * Para obter o segundo dígito do CPF iremos fazer algo similar ao de cima, porém incluindo
 * o primeiro dígito obtido e ao invés de ser uma multiplicação de 10 à 2, agora será de
 * 11 à 2, porque incluímos o digito obtido no calculo anterior
 *
 * (1 x 11, 2 x 10, 3 x 9) -> primeiro centena do CPF
 * (4 x 8, 5 x 7, 6 x 6) -> segunda centena do CPF
 * (7 x 5, 8 x 4, 9 x 3, {digito obtido} x 2 ) -> terceira centena do CPF
 *
 * Formula: 11 - ({ total do calculo de cima } % 11) = { segundo dígito obtido }
 *
 * TODO: o resultado da formula acima não pode ser > que 9, caso seja o resultado é: 0
 */

 function ValidaCpf (cpf) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: () => cpf.replace(/\D+/g, ''),
    configurable: false
  })
}

ValidaCpf.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false
  if (this.cpfLimpo.length !== 11) return false
 	if (this.isSequencia()) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digito1 = this.obtemDigito(cpfParcial)
  const digito2 = this.obtemDigito(cpfParcial + digito1)
  const novoCpf = `${cpfParcial}${digito1}${digito2}`

  return this.cpfLimpo === novoCpf
}

ValidaCpf.prototype.formula = function (total) {
  const digito = 11 - (total % 11)
  return digito > 9 ? 0 : digito
}

ValidaCpf.prototype.obtemDigito = function (cpfParcial) {
  const cpfArray = [...cpfParcial]
  let valorInicial = cpfParcial.length + 1;
  const total = cpfArray.reduce((acc, item) => {
    acc += valorInicial * Number(item)
    valorInicial--
    return acc
  }, 0)
  return this.formula(total)
}

ValidaCpf.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
	return this.cpfLimpo === sequencia
}

const button = document.querySelector('button')
const result = document.querySelector('.form .result')

button.onclick = (event) => {
  event.preventDefault()
  const inputValue = document.querySelector('input').value
  const cpf = new ValidaCpf(inputValue)

  if (cpf.valida()) {
    successMessage()
  } else {
    failMessage()
  }
}

function successMessage () {
  setTimeout(() => {
    result.style.display = 'none'
  }, 2000)
  result.textContent = 'CPF válido!'
  result.style.display = 'block'
  result.style.color = 'green'
}

function failMessage () {
  setTimeout(() => {
    result.style.display = 'none'
  }, 2000)
  result.textContent = 'CPF inválido!'
  result.style.display = 'block'
  result.style.color = 'red'
}
