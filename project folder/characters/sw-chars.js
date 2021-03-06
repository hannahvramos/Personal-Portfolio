import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from '../utils/index.js' //add remove child function

const header = document.querySelector('header')
const main = document.querySelector('main')

const allCharsButton = document.createElement('button')
allCharsButton.textContent = 'All Characters'
allCharsButton.addEventListener ('click', function () {
    populateDOM(people)
})

const maleCharacters = people.filter(person => person.gender === 'male')
const maleCharsButton = document.createElement('button')
maleCharsButton.textContent = 'Male Characters'
maleCharsButton.addEventListener ('click', () => populateDOM(maleCharacters))

const femaleCharacters = people.filter(person => person.gender === 'female')
const femaleCharsButton = document.createElement('button')
femaleCharsButton.textContent = 'Female Characters'
femaleCharsButton.addEventListener ('click', () => populateDOM(femaleCharacters))

const otherCharacters = people.filter((person) => {
    if (
    person.gender === 'n/a' ||
    person.gender === 'none'||
    person.gender === 'hermaphrodite') {
    return person }})
const otherCharsButton = document.createElement('button')
otherCharsButton.textContent = 'Other Characters'
otherCharsButton.addEventListener ('click', () => populateDOM(otherCharacters))

const gayCharacters = people.filter((person) => { 
    if (
    person.name === 'C-3PO' ||
    person.name === 'R2-D2' ) {
    return person }})
const gayCharsButton = document.createElement('button')
gayCharsButton.textContent = 'LGBTQ+ Characters'
gayCharsButton.addEventListener ('click', () => populateDOM(gayCharacters))

header.appendChild(allCharsButton)
header.appendChild(maleCharsButton)
header.appendChild(femaleCharsButton)
header.appendChild(otherCharsButton)
header.appendChild(gayCharsButton)

function populateDOM(characters) {
    removeChildren(main)
    characters.forEach((person) => {
        const personFig = document.createElement('figure')
        const personImg = document.createElement('img')

        let charNum = getLastNumber(person.url)

        personImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        const personCap = document.createElement('figcaption')
        personCap.textContent = person.name
    
    
        personFig.appendChild(personImg)
        personFig.appendChild(personCap)
        main.appendChild(personFig)
    })
}
populateDOM(people)