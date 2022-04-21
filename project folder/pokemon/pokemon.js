
const getAPIData = async (url) => {
  try {
    const result = await fetch(url)
    return await result.json()
  } catch (error) {
    console.error(error)
    }}

const loadedPokemon = []

async function loadPokemon(offset = 0, limit = 25) {
  const pokeData = await getAPIData(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  //const pokeResults = pokeData.results
  for ( const nameAndUrl of pokeData.results ) {
    const pokemon = await getAPIData(nameAndUrl.url)
    const simplifiedPokemon = {
      id: pokemon.id,
      height: pokemon.height,
      weight: pokemon.weight,
      name: pokemon.name,
      type: pokemon.type,
      abilities: pokemon.abilities,
      moves: pokemon.moves.slice(0,3)
    }
    loadedPokemon.push(simplifiedPokemon)
    populatePokeCard(pokemon)
   }}

//const pokeGrid = document.querySelector('.pokeGrid')
//function populatePokeGrid(pokemonArray) {
//populatePokeCard(pokemon)
//console.log(pokemonArray.results)}

class Pokemon {
  constructor(name, height, weight, abilities, types, moves) {
    this.id = 9001,
    this.name = name,
    this.height = height,
    this.weight = weight,
    this.abilities = abilities,
    this.types = types,
    this.moves = moves
}}

function populatePokeCard(pokemon) {
  const pokeScene = document.createElement('div')
  const pokeCard = document.createElement('div')
  pokeScene.className = 'scene'
  pokeCard.className = 'card'
  pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'))
  pokeCard.appendChild(populateCardFront(pokemon))
  pokeCard.appendChild(populateCardBack(pokemon))
  pokeScene.appendChild(pokeCard)
  pokeGrid.appendChild(pokeScene)
}

const newButton = document.createElement('button')
newButton.textContent = 'New Pokemon'
const header = document.querySelector('header')
header.appendChild(newButton)
newButton.addEventListener('click', () => {
const pokeName = prompt('What is the name of your new Pokemon?', 'Thoremon')
const pokeHeight = prompt("What is the Pokemon's height?", 20)
const pokeWeight = prompt("What is the Pokemon's weight?", 1000)
const pokeAbilities= prompt("What are your Pokemon's abilities? (use a comman-separated list)")
const pokeTypes = prompt("What are your Pokemon's types? (up to 2 types separated by a space)")
const newPokemon = new Pokemon(
  pokeName,
  pokeHeight,
  pokeWeight,
  makeAbilitiesArray(pokeAbilities),
  makeTypesArray(pokeTypes),
)
populatePokeCard(newPokemon)})


function populateCardFront(pokemon) {
  const pokeFront = document.createElement('figure')
    pokeFront.className = 'cardFace'
    const pokeType1 = pokemon.types[0].type.name
    //pokeFront.style.setProperty('background', getPokeTypeColor(pokeType1))
    //if (pokeType2) {
      //pokeFront.style.setProperty('background', 'linear-gradient)
    //}
  const pokeImg = document.createElement('img')
    if (pokemon.id > 9000) {
      pokeImg.src = '../images/pokemonlogo.png'
    } else {
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/offical-artwork/${pokemon.id}.png`
    }
  const pokeCaption = document.createElement('figcaption')
    pokeCaption.textContent = pokemon.name
  pokeFront.appendChild(pokeImg)
  pokeFront.appendChild(pokeCaption)
  return pokeFront
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement('div')
  const label = document.createElement('h4')
  const abilityList = document.createElement('ul')
  pokeBack.className = 'cardFace back'
  label.textContent = 'Abilities'
  pokeBack.appendChild(label)
  pokeBack.appendChild(abilityList)
  pokemon.abilities.forEach((abilityItem) => {
    const listItem = document.createElement('li')
    listItem.textContent = abilityItem.ability.name
    abilityList.appendChild(listItem)})
  return pokeBack
}

function getPokeTypeColor(pokeType) {
  let typeColor
    //if(pokeType === "grass") color = #00FF00      >or you can do>>
    switch (pokeType) {
      case 'grass':
        color = '#00FF00'
        break
    }
    return color
}

await loadPokemon(0, 25)

function getPokemonByType(type) {
  return loadedPokemon.filter((pokemon) => pokemon.types[0].type.name === type)
}

//figure out how to display count
//colors, buttons, searches, etc