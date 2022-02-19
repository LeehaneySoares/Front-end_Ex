const time = document.querySelector('.time')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let timer
let seconds = 0

function secondsCreate (seconds) {
  const data = new Date(seconds * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })
}

function iniciaRelogio () {
  timer = setInterval(() => {
    seconds++
    time.innerHTML = secondsCreate(seconds)
  }, 1000)
}

//Iniciando o relógio
iniciar.onclick = () => {
  time.style['color'] = 'black'
  iniciaRelogio()
}

//pausando o relógio
pausar.onclick = () => {
  clearInterval(timer)
  time.style['color'] = 'red'
}

//zerando o relógio
zerar.onclick = () => {
  clearInterval(timer)
  seconds = 0
  time.innerHTML = '00:00:00'
}