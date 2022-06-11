const colors = ['#49007e', '#0a0310', '#ff7d10', '#ffb238', '#5b9b9a', '#523961', '#f10c49', '#f6d86b', '#a2fa1b', '#e2869b', '#c9729f', '#898b75']

const randomIndex = () => Math.round(Math.random() * (colors.length - 1))

export {
  colors,
  randomIndex
}
