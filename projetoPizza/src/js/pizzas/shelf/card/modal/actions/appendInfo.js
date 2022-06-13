const pizzaInfo = document.querySelector('.pizzaInfo')
const pizzaImg = document.querySelector('.pizzaBig img')

export default function (info) {
  pizzaInfo.querySelector('h1').innerHTML = info.name
  pizzaInfo.querySelector('.pizzaInfo--desc').innerHTML = info.description
  pizzaInfo.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${info.price}`
  pizzaImg.src = info.img
}
