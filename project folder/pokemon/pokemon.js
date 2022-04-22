import { removeChildren } from '../utils/index.js'

const getAPIData = async (url) => {
  try {
    const result = await fetch(url)
    return await result.json()
  } catch (error) {
    console.error(error)
    }}

const loadedPokemon = []

async function loadPokemon(offset = 0, limit = 25) {
  const pokeData = await getAPIData(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,)
  for (const nameAndUrl of pokeData.results) {
    const pokemon = await getAPIData(nameAndUrl.url)
    const simplifiedPokemon = {
      id: pokemon.id,
      height: pokemon.height,
      weight: pokemon.weight,
      name: pokemon.name,
      types: pokemon.types,
      abilities: pokemon.abilities,
      moves: pokemon.moves.slice(0,3)
    }
    loadedPokemon.push(simplifiedPokemon)
    populatePokeCard(simplifiedPokemon)
   }}

class Pokemon {
  constructor(name, height, weight, abilities, types) {
    ;(this.id = 9001),
    (this.name = name),
    (this.height = height),
    (this.weight = weight),
    (this.abilities = abilities),
    (this.types = types)
}}

const header = document.querySelector('header')
const newButton = document.createElement('button')
newButton.textContent = 'New Pokemon'
header.appendChild(newButton)
newButton.addEventListener('click', () => {
const pokeName = prompt('What is the name of your new Pokemon?', ' ')
const pokeHeight = prompt("What is the Pokemon's height?", )
const pokeWeight = prompt("What is the Pokemon's weight?", )
const pokeAbilities= prompt("What are your Pokemon's abilities? (seperate by commas)",)
const pokeTypes = prompt("What are your Pokemon's types? (1-2 types, separate by a space)",)
const newPokemon = new Pokemon(
  pokeName,
  pokeHeight,
  pokeWeight,
  makeAbilitiesArray(pokeAbilities),
  makeTypesArray(pokeTypes),
)
populatePokeCard(newPokemon)})


function makeAbilitiesArray(commaString) {
  return commaString.split(',').map((abilityName) => {
    return {
      ability: { name: abilityName },
    }})}

function makeTypesArray(spacedString) {
  return spacedString.split(' ').map((typeName) => {
     return {
       type: { name: typeName },
     }})}

const pokeGrid = document.querySelector('.pokeGrid')

function populatePokeCard(pokemon) {
  const pokeScene = document.createElement('div')
  pokeScene.className = 'scene'
  const pokeCard = document.createElement('div')
  pokeCard.className = 'card'
  pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'),)
  pokeCard.appendChild(populateCardFront(pokemon))
  pokeCard.appendChild(populateCardBack(pokemon))
  pokeScene.appendChild(pokeCard)
  pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement('figure')
    pokeFront.className = 'cardFace front'
    const pokeType1 = pokemon.types[0].type.name
    const pokeType2 = pokemon.types[1]?.type.name
    pokeFront.style.setProperty('background', getPokeTypeColor(pokeType1))
      if(pokeType2) {
      pokeFront.style.setProperty('background', `linear-gradient${getPokeTypeColor(pokeType1)}, ${getPokeTypeColor(pokeType2)})`)}
  const pokeImg = document.createElement('img')
    if (pokemon.id > 9000) {
      pokeImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png`
    } else {
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    }
  const pokeCaption = document.createElement('figcaption')
    pokeCaption.textContent = pokemon.name
  //const pokeTypeIcon = document.createElement('img')
  //pokeFront.style.setProperty('img', getPokeTypeIcon(pokeType1))
  //pokeFront.appendChild(pokeTypeIcon)
  pokeFront.appendChild(pokeImg)
  pokeFront.appendChild(pokeCaption)
  return pokeFront
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement('div')
  pokeBack.className = 'cardFace back'
  const idLabel = document.createElement('h4')
    idLabel.textContent = 'ID: '+ pokemon.id
    pokeBack.appendChild(idLabel)
  const heightLabel = document.createElement('h4')
    heightLabel.textContent = 'Height: '+ pokemon.height
    pokeBack.appendChild(heightLabel)
  const weightLabel = document.createElement('h4')
    weightLabel.textContent = 'Weight: '+ pokemon.weight
    pokeBack.appendChild(weightLabel)
  const abilitiesLabel = document.createElement('h4')
  abilitiesLabel.textContent = 'Abilities'
  pokeBack.appendChild(abilitiesLabel)
  const abilityList = document.createElement('ul')
  pokemon.abilities.forEach((abilityItem) => {
    const listItem = document.createElement('li')
    listItem.textContent = abilityItem.ability.name
    abilityList.appendChild(listItem)})
  pokeBack.appendChild(abilityList)
  return pokeBack
}

const idButton = document.createElement('button')
idButton.textContent = 'Find by ID'
idButton.addEventListener('click', () => {
  const pokeID = prompt("Pokemon ID or Name",)
  //console.log('in progress')
  })
header.appendChild(idButton)

function getPokeTypeColor(pokeType) {
  let color
    switch (pokeType) {
      case 'normal':
        color = '#A8A878'
        break
      case 'fire':
        color = '#F08030'
        break
      case 'water':
        color = '#6890F0'
        break
      case 'grass':
        color = '#78C850'
        break
      case 'flying':
        color = '#A890F0'
        break
      case 'fighting':
        color = '#00FFFF'
        break
      case 'poison':
        color = '#A040A0'
        break
      case 'electric':
        color = '#F8D030'
        break
      case 'ground':
        color = '#E0C068'
        break
      case 'rock':
        color = '#B8A038'
        break
      case 'psychic':
        color = '#F85888'
        break
      case 'ice':
        color = '#98D8D8'
        break
      case 'bug':
        color = '#A8B820'
        break
      case 'ghost':
        color = '#705898'
        break
      case 'steel':
        color = '#B8B8D0'
        break
      case 'dragon':
        color = '#7038F8'
        break
      case 'dark':
        color = '#705848'
        break
      case 'fairy':
        color = '#EE99AC'
        break
      default:
        color = '#68A090'
    }
    return color
}
  
function getPokemonByType(type) {
  return loadedPokemon.filter((pokemon) => {
    if(pokemon.types[0].type.name === type)
      return pokemon
    if((pokemon.types[1]?.type.name) && (pokemon.types[1].type.name === type)) {
      return pokemon }})}

await loadPokemon(0, 25)

//loadmore, sorttype, search name/id