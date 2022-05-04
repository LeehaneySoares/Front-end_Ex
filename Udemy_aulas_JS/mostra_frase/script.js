const frases = ['olá, seja bem vindo', 'Meu nome é Leehaney Soares', 'Sou programador', 'Formado em Analise e desenvolvimento de sistemas']

let count = 0
const temp = setInterval(() => {
  if (count >= frases.length) {
    count = 0
  }
  console.log(frases[count])
  count += 1
}, 1000)

