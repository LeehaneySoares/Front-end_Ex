import Shelf from './pizzas/shelf.js'
import schema from './schema.js'
import { $, all } from './pizzas/shortcuts.js'

const shelf = Shelf.create(schema)
const cards = shelf.cards
const pizzaArea = $('.pizza-area')

cards.forEach(card => pizzaArea.innerHTML += card.figure)
