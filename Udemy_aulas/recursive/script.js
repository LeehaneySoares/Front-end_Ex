const recursive = (n) => {
  if (n >= 50) return
  n++
  console.log(n)
  recursive(n)
}

recursive(0)
