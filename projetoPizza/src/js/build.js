import schema from './schema.js'
import Shelf from './pizzas/Shelf.js'

const build = Shelf.create(schema).cards

export default build
