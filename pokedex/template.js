export const template = (app) => {
  const lisPokemons = app.reduce((acc, item) => {
    const types = item.types.map(typeInfo => typeInfo.type.name)
    const src = item.sprites.front_default

    acc += `
      <figure class='card'>
        <img class='card-image ${types[0]}' src='${src}'/>
        <figcaption class='card__caption'>
          <h2 class='card-title'>${item.name}</h2>
          <p class='card-subtitle'>${types.join(' | ')}</p>
        </figcaption>
      </figure>
    `
    return acc
  }, '')

  return lisPokemons
}
