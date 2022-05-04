//function* generate () {
  //yield 'valor 1'

  //yield 'valor 2'

  //yield 'valor 3'
//}

//const g1 = generate()


//function* generateFunction () {
  //yield 'Neo'
  //yield 'Morpheus'
  //yield 'Trinity'

  //Ao utilizar o return não precisaremos fazer o 4 (quarto) next()
  //pois ele termina aqui, automaticamente o done vai para true
  //return 'The Oracle'
//}

//const generate = generateFunction()
function* generate4 () {
  yield 'vim do generate4'
}

function* generate2 () {
  yield 'vim do generate2'
  yield* generate4()
}

function* generate3 () {
  yield 'vim do generate3'
}

function* generate1 () {
  yield 'olá, vim do generate1'
  yield* generate2()
  yield* generate3()

  return 'Agora voltei a ser do generate1'
}

const g1 = generate1()


function* generec() {
  yield function () {
    console.log('sou yield 1')
  }

  yield function () {
    console.log('sou o yield 2')
  }
}

const teste = generec()
const func1 = teste.next().value

const func2 = teste.next().value
func1()
func2()



