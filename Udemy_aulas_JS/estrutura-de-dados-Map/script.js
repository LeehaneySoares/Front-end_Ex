const pessoas = [
  { id: 4, nome: 'Leehaney' },
  { id: 2, nome: 'Valmira' },
  { id: 1, nome: 'Taylor' },
  { id: 5, nome: 'Betania' },
  { id: 3, nome: 'João' },
  { id: 6, nome: 'Maria' },
]

for (const pessoa of pessoas) {
  const { id } = pessoas
  const novasPessoas = pessoa[id]

  console.log(novasPessoas)
}
