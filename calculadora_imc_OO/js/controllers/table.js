class Table {
  #span
  #table
  #tr
  #td

  get span () {
    return this.#span
  }

  get table () {
    return this.#table
  }

  get td () {
    return this.#td
  }

  get tr () {
    return this.#tr
  }

  constructor (descriptor) {
    this.#span = document.createElement('span')
    this.#table = document.querySelector('.table')
    this.#td = document.createElement('td')
    this.#tr = document.createElement('tr')
    this.appendElement(descriptor)
  }

  appendElement (descriptor) {
    this.#span.textContent = descriptor?.nome
    this.#td.appendChild(this.#span)
    this.#tr.appendChild(this.#td)
    this.#table.appendChild(this.#tr)
    console.log(this.#tr)
    return this
  }

  static create (descriptor) {
    return new Table(descriptor)
  }
}

export default Table
