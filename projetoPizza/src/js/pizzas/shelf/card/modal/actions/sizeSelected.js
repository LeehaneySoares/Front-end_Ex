const $ = element => document.querySelector(element)

const sizeSelected = function (size) {
  $('.pizzaInfo--size.selected').classList.remove('selected')
  size.classList.add('selected')
}

export default sizeSelected
