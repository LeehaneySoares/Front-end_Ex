import schema from './schema.js'
import Shelf from './pizzas/shelf.js'

const build = Shelf.create(schema).cards

export default build
