class StartRater extends HTMLElement {
  #rater
  #rating = 1
  #shadow
  #star
  #stars
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
    this.resetRating()
    this.#shadow.appendChild(this.#rater)
    return this.#shadow
  }

  createRater () {
    this.#rater = document.createElement('div')
    this.#rater.classList.add('star-rater')
    this.#rater.addEventListener('mouseout', (event) => this.resetRating(event))
    return this.#rater
  }

  createStars () {
    const createStar = (_, index) => {
      this.#star = document.createElement('span')
      this.#star.classList.add('star')
      this.#star.setAttribute('data-value', Number(index) + 1)
      this.#star.innerHTML = '&#9733;'

      this.#star.addEventListener('click', (event) => this.setRating(event))
      this.#star.addEventListener('mouseover', (event) => this.ratingHover(event))
      return this.#star
    }
    return Array.from({ length: 5 }, createStar) // [span, span, span, span]
  }

  highlightRating () {
    this.#stars.forEach( star => {
      star.style.color = this.currentTargetValue >= star.getAttribute('data-value')
      ? 'yellow'
      : 'gray'
    })
  }

  ratingHover (event) {
    this.currentTargetValue = event.target.getAttribute('data-value')
    this.highlightRating()
  }

  resetRating () {
    this.currentTargetValue = this.getAttribute('data-rating') || 0
    this.highlightRating()
  }

  styles () {
    this.#style = document.createElement('style')
    this.#style.textContent = `
      .star {
        font-size: 5rem;
        color: gray;
        cursor: pointer;
      }
    `
    return this.#style
  }

  setRating (event) {
    return this.setAttribute('data-rating', event.target.getAttribute('data-value'))
  }
}

customElements.define('star-rater', StartRater)