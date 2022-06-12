import { $ } from '../../scripts/shortcuts.js'

function cancelButton (modal) {
  $('.pizzaInfo--cancelButton')
    .addEventListener('click', () => modal.close())
}

export default cancelButton
