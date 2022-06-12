import build from './build.js'
import { $ } from './pizzas/shortcuts.js'

const pizzaArea = $('.pizza-area')
build.forEach(card => pizzaArea.append(card.figure))
