// Constructor function

function Calculadora () {
  this.display = document.querySelector('.display')

  this.constructor = function () {
    this.createButton()
    this.pressEnter()
  }

  this.backSpace = function () {
    this.display.value = this.display.value.slice(0, -1)
  }

  this.calculator = function () {
    let result = this.display.value

    try {
      result = eval(result)

      if (!result) {
        alert('Conta inválida')
        this.clear()
      }
      this.display.value = result
    } catch (error) {
      alert('Conta inválida')
      this.clear()
    }
  }

  this.changeValue = function (value) {
    this.display.value += value
  }

  this.clear = function () {
    this.display.value = ''
  }

  this.createButton = function () {
    document.addEventListener('click', (e) => {
      const num = e.target
      if (num.classList.contains('btn-num')) this.changeValue(num.innerText)
      if (num.classList.contains('btn-clear')) this.clear()
      if (num.classList.contains('btn-del')) this.backSpace()
      if (num.classList.contains('btn-eq')) this.calculator()
      if (num.classList.contains('btn-div')) this.changeValue(num.innerText)
      if (num.classList.contains('btn-multi')) this.changeValue(num.innerText)
      if (num.classList.contains('btn-soma')) this.changeValue(num.innerText)
      if (num.classList.contains('btn-sub')) this.changeValue(num.innerText)
    })
  }

  this.pressEnter = function () {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.calculator()
    })
  }
}

const calc = new Calculadora()

calc.constructor()