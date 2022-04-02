// Neste exemplo nem precisaria criar uma factory function

function createCalc () {
  return {
    display: document.querySelector('.calc__display'),

    initial () {
      this.createButton()
      this.pressEnter()
    },

    backSpace () {
      this.display.value = this.display.value.slice(0, -1)
    },

    calculator () {
      let result = this.display.value
      try {
        result = eval(result)

        if (!result) {
          alert('Conta inválida')
          this.clear()
        }
        this.display.value = String(result)
      } catch (error) {
        alert('Conta inválida')
        this.clear()
      }
    },

    changeValue (value) {
      this.display.value += value
    },

    clear () {
      this.display.value = ''
    },

    createButton () {
      document.addEventListener('click', (event) => {
        const num = event.target
        if (num.classList.contains('btn-num')) this.changeValue(num.innerText)
        if (num.classList.contains('btn-clear')) this.clear()
        if (num.classList.contains('btn-del')) this.backSpace()
        if (num.classList.contains('btn-eq')) this.calculator()
        if (num.classList.contains('btn-div')) this.changeValue(num.innerText)
        if (num.classList.contains('btn-multi')) this.changeValue(num.innerText)
        if (num.classList.contains('btn-soma')) this.changeValue(num.innerText)
        if (num.classList.contains('btn-sub')) this.changeValue(num.innerText)
      })

      this.display.focus()
    },

    pressEnter () {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) this.calculator()
      })
    }
  }
}

const calc = createCalc()

// esse será meu "constructor"
calc.initial()
