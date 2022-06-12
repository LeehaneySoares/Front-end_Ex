function mount (card, figure) {
  figure.querySelector('img').src = card.img
  figure.querySelector('.pizza-item--price').innerHTML = `R$ ${card.price}`
  figure.querySelector('.pizza-item--name').innerHTML = card.name
  figure.querySelector('.pizza-item--desc').innerHTML = card.description
  figure.querySelector('.pizza-item a')
    .addEventListener('click', (event) => card.openModal(event))
}

export default mount
