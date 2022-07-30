fetch('pessoas.json')
  .then(response => response.json())
  .then(json => carregarPagina(json))

function carregarPagina (json) {
  const response = document.querySelector('.response')
  const table = document.createElement('table')
  const pagination = document.querySelector('.verMais')
  let limit = 24
  let start = 0

  for (let pessoa of json.slice(start, limit)) {
    const tr = document.createElement('tr')
    let td = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')

    td.innerHTML = pessoa.nome
    tr.appendChild(td)

    td2.innerHTML = pessoa.idade
    tr.appendChild(td2)

    td3.innerHTML = pessoa.estado
    tr.appendChild(td3)

    table.appendChild(tr)
  }

  pagination.addEventListener('click', function () {
    start += limit
    limit += limit

    for (let pessoa of json.slice(start, limit)) {
      const tr = document.createElement('tr')
      let td = document.createElement('td')
      let td2 = document.createElement('td')
      let td3 = document.createElement('td')

      td.innerHTML = pessoa.nome
      tr.appendChild(td)

      td2.innerHTML = pessoa.idade
      tr.appendChild(td2)

      td3.innerHTML = pessoa.estado
      tr.appendChild(td3)

      table.appendChild(tr)
    }
  })
  response.appendChild(table)
}
