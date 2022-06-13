const $ = element => document.querySelector(element)

export default function (card) {
  const figure = $('.models .pizza-item').cloneNode(true)

  figure.querySelector('img').src = card.img
  figure.querySelector('.pizza-item--price').innerHTML = `R$ ${card.price}`
  figure.querySelector('.pizza-item--name').innerHTML = card.name
  figure.querySelector('.pizza-item--desc').innerHTML = card.description
  figure.querySelector('.pizza-item a')
    .addEventListener('click', (event) => card.openModal(event))

  card.appendFigure(figure)
}
