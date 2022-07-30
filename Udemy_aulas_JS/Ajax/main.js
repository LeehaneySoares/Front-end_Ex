// function requested (descriptor) {
//   const xhr = new XMLHttpRequest()
//   xhr.open(descriptor.method, descriptor.url, true)
//   xhr.send()

//   xhr.addEventListener('load', function () {
//     try {
//       xhr.status >= 200 &&
//       xhr.status <= 300 &&
//       descriptor.success(xhr.responseText)
//     } catch (error) {
//       descriptor.error(xhr.statusText)
//     }
//   })
// }

function carregaPagina (element) {
  const href = element.getAttribute('href')

  fetch(href)
    .then(response => (
      response.status !== 200 && new Error('ERRO 404!'),
      response.text()
    ))
    .then(html => carregaResultado(html))
    .catch(error => console.log(error))
}

function carregaResultado (response) {
  const result = document.querySelector('.app')

  result.innerHTML = response
}

document.addEventListener('click', function (event) {
  event.preventDefault()
  const element = event.target
  const tag = element.tagName.toLowerCase();

  tag === 'a' &&
  carregaPagina(element)
})
