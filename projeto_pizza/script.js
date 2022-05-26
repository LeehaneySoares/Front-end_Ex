import pizzaJson from './pizzas.js'

const pizzaArea = document.querySelector('.pizza-area')

console.log(pizzaJson)

function card (item, id) {
  return `
    <figure class="pizza-item" id="${id}">
      <img class="pizza-item--img" src="./${item.img}" alt="${item.name}" />
      <figcaption class="caption">
        <span>R$ ${item.price.toFixed(2)}<span>
        <strong>${item.name}</strong>
        <p>${item.description}</p>
      </figcaption>
      <button class="pizza-item--add">+</button>
    </figure>
  `
}

pizzaJson.forEach(function (item, index) {
  pizzaArea.innerHTML += card(item, index)
})
