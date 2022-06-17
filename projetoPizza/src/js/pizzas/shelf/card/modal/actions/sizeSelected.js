const sizeSelected = document.querySelector('.pizzaInfo--sizes .pizzaInfo--size')

export default (modal) => {
  modal.options.querySelector('.pizzaInfo--size.selected').classList.remove('selected')
  modal.options.querySelector('pizzaInfo--size').classList.add('selected')
}
