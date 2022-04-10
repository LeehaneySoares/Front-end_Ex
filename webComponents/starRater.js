class StartRater extends HTMLElement {
  #rater
  #shadow
  #star
  #stars
  #starRater
  #style

  get style () {
    return this.#style
  }
  
  constructor () {
    super()
    this.build()
  }

  build () {
    this.#shadow = this.attachShadow({ mode: 'open' })
    this.#shadow.appendChild(this.styles())
    this.#rater = this.createRater()
    this.#stars = this.createStars() // [span, span, span, span, span]
    this.#stars.forEach(star => this.#rater.appendChild(star)) // Para cada Span estou appendando dentro de rater
    this.#shadow.appendChild(this.#rater)
    return this.#shadow
  }

  createRater () {
    this.#rater = document.createElement('div')
    this.#rater.classList.add('star-rater')
    return this.#rater
  }

  createStars () {
    const createStar = (_, index) => {
      this.#star = document.createElement('span')
      this.#star.classList.add('star')
      this.#star.setAttribute('data-value', Number(index) + 1)
      this.#star.innerHTML = '&#9733;'
      return this.#star
    }
    return Array.from({ length: 5 }, createStar) // [span, span, span, span]
  }

  styles () {
    this.#style = document.createElement('style')
    this.#style.textContent = `
      .star-rater {
        background-color: red;
      }
    `
    return this.#style
  }
}

customElements.define('tag-teste', StartRater)