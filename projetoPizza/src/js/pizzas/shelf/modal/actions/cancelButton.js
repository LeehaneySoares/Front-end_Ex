import { $ } from '../../../controllers/scripts/shortcuts.js'

function cancelButton (modal) {
  $('.pizzaInfo--cancelButton')
    .addEventListener('click', () => modal.close())
}

export default cancelButton
