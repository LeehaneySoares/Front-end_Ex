const cancelButton = document.querySelector('.pizzaInfo--cancelButton')

export default (modal) =>
  cancelButton.addEventListener('click', () => modal.close())
