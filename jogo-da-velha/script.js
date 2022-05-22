const player = document.querySelector('.player p')
const inputs = document.querySelectorAll('.bloco')
let vencedor = '__'
let jogador = '__'

function vitoria () {
  if ((inputs[0].value === inputs[1].value) && (inputs[1].value === inputs[2].value) && inputs[0].value != '__' ) {
    inputs[0].style.backgroundColor = '#0F0';
    inputs[1].style.backgroundColor = '#0F0';
    inputs[2].style.backgroundColor = '#0F0';

    return inputs[0].value;

  } else if((inputs[3].value === inputs[4].value) && (inputs[4].value === inputs[5].value) && inputs[3].value != '__' ) {
      inputs[3].style.backgroundColor = '#0F0';
      inputs[4].style.backgroundColor = '#0F0';
      inputs[5].style.backgroundColor = '#0F0';

      return inputs[3].value;

  } else if((inputs[6].value === inputs[7].value) && (inputs[7].value === inputs[8].value) && inputs[6].value!='__' ) {
      inputs[6].style.backgroundColor = '#0F0';
      inputs[7].style.backgroundColor = '#0F0';
      inputs[8].style.backgroundColor = '#0F0';

      return inputs[6].value;

  } else if((inputs[0].value === inputs[3].value) && (inputs[3].value === inputs[6].value) && inputs[0].value!='__' ) {
      inputs[0].style.backgroundColor = '#0F0';
      inputs[3].style.backgroundColor = '#0F0';
      inputs[6].style.backgroundColor = '#0F0';

      return inputs[0].value;

  } else if((inputs[1].value === inputs[4].value) && (inputs[4].value === inputs[7].value) && inputs[1].value!='__' ) {
      inputs[1].style.backgroundColor = '#0F0';
      inputs[4].style.backgroundColor = '#0F0';
      inputs[7].style.backgroundColor = '#0F0';

      return inputs[1].value;

  } else if((inputs[2].value === inputs[5].value) && (inputs[5].value === inputs[8].value) && inputs[2].value!='__' ) {
      inputs[2].style.backgroundColor = '#0F0';
      inputs[5].style.backgroundColor = '#0F0';
      inputs[8].style.backgroundColor = '#0F0';

      return inputs[2].value;
  } else if((inputs[0].value === inputs[4].value) && (inputs[4].value === inputs[8].value) && inputs[0].value!='__' ) {
      inputs[0].style.backgroundColor = '#0F0';
      inputs[4].style.backgroundColor = '#0F0';
      inputs[8].style.backgroundColor = '#0F0';

      return inputs[0].value;

  } else if((inputs[2].value === inputs[4].value) && (inputs[4].value === inputs[6].value) && inputs[2].value != '__' ) {
      inputs[2].style.backgroundColor = '#0F0';
      inputs[4].style.backgroundColor = '#0F0';
      inputs[6].style.backgroundColor = '#0F0';

      return inputs[2].value;
  }

  return '__';
}

function trocarJogador () {
  if (jogador  === 'X') {
    jogador = 'O'
    return player.textContent = jogador
  } else {
    jogador = 'X'
    return player.textContent = jogador
  }
}

function randomPlayer () {
  if (Math.floor(Math.random() * 2)  === 0) {
    jogador = 'O'
    return player.textContent = jogador
  } else {
    jogador = 'X'
    return player.textContent = jogador
  }
}

randomPlayer()

inputs.forEach((item, index) => {
  item.addEventListener('click', function (event) {
    if ((event.target.value  === '__' && (vencedor  === '__'))) {
      event.target.value = jogador
      trocarJogador()
      vencedor = vitoria()

      if (vencedor != '__') return player.textContent = `${vencedor} venceu!`
    }
  })
})


