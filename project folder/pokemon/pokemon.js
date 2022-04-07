
function getAPIData(url) {
    try {
        return fetch(url).then((data) =>  data.json())
    } catch (error) {
        console.error(error)
    }
}

function loadPokemon() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/eevee`).then(
        (data => console.log(data))
    )
}

loadPokemon()