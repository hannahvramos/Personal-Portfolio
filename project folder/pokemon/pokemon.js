
function getAPIData(url) {
    try {
        const result = await fetch(url)
        return await result.json()
    } catch (error) {
        console.error(error)
    }}

async function loadPokemon(offset = 0, limit = 25) {
   const pokeData = await getAPIData(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
   const pokeResults = pokeData.results
   for ( const nameAndUrl of pokeResults ) {
    const pokemon = await getAPIData(nameAndUrl.url)

   }
   
populatePokeGrid(pokeData)
}

const pokeGrid = document.querySelector('.pokeGrid')

//function populatePokeGrid(pokemonArray) {
//   populatePokeCard(pokemon)
//    console.log(pokemonArray.results)}

function populatePokeCard(pokemon) {
    const pokeScene = document.createElement('div')
    const pokeCard = document.createElement('div')
    pokeScene.className = 'scene'
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'))
    pokeCard.appendChild(populateCardFront(pokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
const pokeFront = document.createElement('figure')
const pokeImg = document.createElement('img')
const pokeCaption = document.createElement('figcaption')
pokeFront.className = 'cardFace'
pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/offical-artwork/143.png`
pokeCaption.textContent = 'eevee'
pokeFront.appendChild(pokeImg)
pokeFront.appendChild(pokeCaption)
return pokeFront
}

function populateCardBack(pokemon) {
    
}

loadPokemon()