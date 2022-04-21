import Pessoa from './controllers/Pessoa.js'
import Table from './controllers/table.js'

const verifica = document.querySelector('.submit')
const table = document.querySelector('.table')
const tr = document.createElement('tr')
const td = document.createElement('td')

verifica.onclick = (event) => {
  event.preventDefault()
  Pessoa.create()
  Pessoa.table
}




