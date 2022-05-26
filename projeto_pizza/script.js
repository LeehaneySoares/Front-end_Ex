import pizzaJson from './pizzas.js'

const pizzaArea = document.querySelector('.pizza-area')

console.log(pizzaJson)

function card (image, name) {
  const img = document.createElement('img')
  const caption = document.createElement('figcaption')
  const figure = document.createElement('figure')
  const a = document.createElement('a')
  a.textContent = name
  caption.appendChild(a)

  figure.setAttribute('class', 'pizza-item')
  img.setAttribute('class', 'pizza-item--img')
  img.setAttribute('src', `./${image}`)
  figure.append(img, caption)
  return figure
}

pizzaJson.forEach(function (item, index) {
  pizzaArea.appendChild(card(item.img, item.name))
})
