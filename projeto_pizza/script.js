import pizzaJson from './pizzas.js'

const $ = element => document.querySelector(element)
const all = element => document.querySelectorAll(element)
const pizzaArea = $('.pizza-area')
const cart = []
let pizzaId = ''

/**
 * Função que altera o elemento de tamanho da pizza
 * Altera a cor do tamanho selecionado
 * @param {*} size : Arrays com tamanho das pizzas;
 */

function changeTabs(size) {
  size.addEventListener('click', function () {
    $('.pizzaInfo--size.selected').classList.remove('selected')
    size.classList.add('selected')
  })
}

function setValue(modal, props) {
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

    changeTabs(size)
  })
}

function changeQt(props) {
  let count = 1
  let priceActual = props.price
  const pizzaQt = $('.pizzaInfo--qt')
  const buttonsQt = all('.pizzaInfo--qtmenos, .pizzaInfo--qtmais')
  const price = $('.pizzaInfo--actualPrice')

  pizzaQt.innerHTML = count

  buttonsQt.forEach(item => item.addEventListener('click', function (event) {
    if (event.target.classList.contains('pizzaInfo--qtmais')) {
      count++
      priceActual = props.price * count

      price.innerHTML = `R$ ${priceActual.toFixed(2)}`
      pizzaQt.innerHTML = count
    }
    else {
      if (count > 1) {
        count--
        priceActual -= props.price
      }
      price.innerHTML = `R$ ${priceActual.toFixed(2)}`
      pizzaQt.innerHTML = count
    }
    return count
  }))
}

function openModal(props) {
  pizzaId = parseInt(props.id)
  const modal = $('.pizzaWindowArea')
  const cancelButton = all('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton')

  modal.style.opcity = 0
  modal.style.display = 'flex'
  setTimeout(() => modal.style.opacity = 1, 200)

  // Função que seta os valores no modal de acordo com a pizza selecionada
  setValue(modal, props)

  // Função que altera o preço de acordo com a quantidade de pizzas
  changeQt(props)

  cancelButton.forEach(item => item.addEventListener('click', () => closeModal()))
}

function closeModal () {
  const modal = $('.pizzaWindowArea')
  modal.style.opacity = 0
  setTimeout(() => modal.style.display = 'none', 200)
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
    openModal(item, index) // Função que executa a ação de exibir o modal
  })

  /**
   * nó.append() -> appenda mais de um elemento como filho do __nó__
   */
  pizzaArea.append(pizzaItem)
})

$('.pizzaInfo--addButton').addEventListener('click', function () {
  closeModal()
  const qtPizza = parseInt($('.pizzaInfo--qt').innerHTML)
  const sizePizza = parseInt($('.pizzaInfo--size.selected').getAttribute('data-key'))

  const identifier = `${pizzaJson[pizzaId - 1].id}*${sizePizza}`

  const key = cart.findIndex(item => item.key === identifier)

  key != -1
    ? cart[key].qt += qtPizza
    : cart.push({ key: identifier, id: pizzaId, size: sizePizza, qt: qtPizza })
})
