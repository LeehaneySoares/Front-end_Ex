import pizzaJson from './pizzas.js'

const $ = element => document.querySelector(element)
const all = element => document.querySelectorAll(element)
const pizzaArea = $('.pizza-area')

/**
 * Função que altera o elemento de tamanho da pizza
 * Altera a cor do tamanho selecionado
 * @param {*} size : ;
 */

function changeSelected (size) {
  size.addEventListener('click', function () {
    $('.pizzaInfo--size.selected').classList.remove('selected')
    size.classList.add('selected')
  })
}

function setValue (modal, props) {
  modal.querySelector('.pizzaBig img').src = props.img
  modal.querySelector('.pizzaInfo h1').innerHTML = props.name
  modal.querySelector('.pizzaInfo--desc').innerHTML = props.description
  modal.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${props.price.toFixed(2)}`
  /**
   * Desmarcando todos o stamanhos de pizza
   */
  $('.pizzaInfo--size.selected').classList.remove('selected')

  all('.pizzaInfo--size').forEach((size, index) => {
    index === 2
      ? size.classList.add('selected') // Marcando somente a pizza grande após outro modal ser aberto
      : false
    size.querySelector('span').innerHTML = props.sizes[index]

    changeSelected(size)
  })
}

function toggle (item, index) {
  const modal = $('.pizzaWindowArea')
  const timeModal = 10
  const buttonCancel = modal.querySelector('.pizzaInfo--cancelButton')

  modal.style.opcity = 0
  modal.style.display = 'flex'
  setTimeout(() => modal.style.opacity = 1, timeModal)

  setValue(modal, item, index) // Função que seta os valores no modal de acordo com a pizza selecionada
  buttonCancel.addEventListener('click', () => modal.style.display = 'none')
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
    toggle(item, index) // Função que executa a ação de exibir o modal
  })

  /**
   * nó.append() -> appenda mais de um elemento como filho do __nó__
   */
  pizzaArea.append(pizzaItem)
})
