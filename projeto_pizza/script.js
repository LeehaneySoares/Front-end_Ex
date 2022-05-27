import pizzaJson from './pizzas.js'

const $ = element => document.querySelector(element)
const pizzaArea = $('.pizza-area')

function changeSelected (modal) {

}

function setValue (modal, props) {
  const sizes = props.sizes

  modal.querySelector('.pizzaBig img').src = props.img
  modal.querySelector('.pizzaInfo h1').innerHTML = props.name
  modal.querySelector('.pizzaInfo .pizzaInfo--desc').innerHTML = props.description
  modal.querySelector('.pizzaInfo .pizzaInfo--actualPrice').innerHTML = `R$ ${props.price.toFixed(2)}`

  sizes.forEach((size, index) =>
    modal.querySelector(`.pizzaInfo--sizes [data-key="${index}"]`).innerHTML = size
  )
}

function toggle (item) {
  const modal = $('.pizzaWindowArea')
  const timeModal = 10

  modal.style.opcity = 0
  modal.style.display = 'flex'
  setTimeout(() => modal.style.opacity = 1, timeModal)

  setValue(modal, item) // Função que seta os valores no modal de acordo com a pizza selecionada
  changeSelected(modal)
}

pizzaJson.forEach(function (item, index) {
  /**
   * Clonando o nó modelo para ser utilizado repetitivamente
   */
  const pizzaItem = $('.models .pizza-item').cloneNode(true)
  pizzaItem.setAttribute('data-key', index)
  pizzaItem.querySelector('.pizza-item--img img').src = `./${item.img}`
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

  pizzaItem.querySelector('.pizza-item a').addEventListener('click', (event) => {
    event.preventDefault()
    toggle(item) // Função que executa a ação de exibir o modal
  })


  /**
   * nó.append() -> appenda mais de um elemento como filho do __nó__
   */
  pizzaArea.append(pizzaItem)
})
