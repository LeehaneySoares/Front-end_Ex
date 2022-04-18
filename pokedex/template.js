export const template = (app) => {
  const lisPokemons = app.reduce((acc, { name, types, sprites }) => {
    const elementTypes = types.map(typeInfo => typeInfo.type.name)
    const src = sprites.front_default

    acc += `
      <figure class='card'>
        <img class='card-image ${elementTypes[0]}' src='${src}'/>
        <figcaption class='card__caption'>
          <h2 class='card-title'>${name}</h2>
          <p class='card-subtitle'>${elementTypes.join(' | ')}</p>
        </figcaption>
      </figure>
    `
    return acc
  }, '')

  return lisPokemons
}
