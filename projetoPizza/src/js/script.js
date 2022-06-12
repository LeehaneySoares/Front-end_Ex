import build from './build.js'
import { $ } from './pizzas/controllers/scripts/shortcuts.js'

build.forEach(card => $('.pizza-area').append(card.figure))
