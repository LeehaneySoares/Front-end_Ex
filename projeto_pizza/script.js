import pizzaJson from './pizzas.js'

const $ = element => document.querySelector(element)
const all = element => document.querySelectorAll(element)
const pizzaArea = $('.pizza-area')

/**
 * Função que altera o elemento de tamanho da pizza
 * Altera a cor do tamanho selecionado
 * @param {*} size : ;
 */

function changeTabs (size) {
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

    changeTabs(size)
  })
}

function changeQt (props) {
  let count = 1
  let priceActual = props.price
  const pizzaQt = $('.pizzaInfo--qt')
  const inc = $('.pizzaInfo--qtmais')
  const dec = $('.pizzaInfo--qtmenos')
  const price = $('.pizzaInfo--actualPrice')

  pizzaQt.innerHTML = count

  inc.addEventListener('click', function () {
    count++
    priceActual = props.price * count

    price.innerHTML = `R$ ${priceActual.toFixed(2)}`
    pizzaQt.innerHTML = count
  })
  dec.addEventListener('click', function () {
    if (count === 1) {
      count = 1
      priceActual = props.price
    } else {
      count--
      priceActual -= props.price
    }

    price.innerHTML = `R$ ${priceActual.toFixed(2)}`
    pizzaQt.innerHTML = count
  })

}

function toggle (props) {
  const modal = $('.pizzaWindowArea')
  const timeModal = 10
  const buttonCancel = modal.querySelector('.pizzaInfo--cancelButton')
  const buttonMobile = modal.querySelector('.pizzaInfo--cancelMobileButton')

  modal.style.opcity = 0
  modal.style.display = 'flex'
  setTimeout(() => modal.style.opacity = 1, timeModal)

  setValue(modal, props) // Função que seta os valores no modal de acordo com a pizza selecionada
  changeQt(props)

  buttonCancel.addEventListener('click', () => modal.style.display = 'none') // Fecha o modal na versão Desk
  buttonMobile.addEventListener('click', () => modal.style.display = 'none') // Fecha o modal no mobile
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
