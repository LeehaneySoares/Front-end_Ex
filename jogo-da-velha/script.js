const player = document.querySelector('.player p')
const inputs = document.querySelectorAll('.bloco')

function changePlayer (index) {
  if (index % 2 === 0) {
    return player.textContent = 'X'
  }
  else {
    return player.textContent = 'O'
  }
}

inputs.forEach((item, index) => {
  item.addEventListener('click', function () {
    item.value = changePlayer(index)
  })
})


