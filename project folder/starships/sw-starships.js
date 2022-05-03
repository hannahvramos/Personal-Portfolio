import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipViewer = document.querySelector('.shipViewer')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const shipMessage = document.querySelector('.shipMessage') //fix the class

closeButton.addEventListener('click', ()=> {
    modal.classList.toggle('is-active')
})

function populateNav() {
    starships.forEach((starship) => {
        let anchor = document.createElement('a')
        anchor.href = ('#')
        anchor.textContent = starship.name
        const listItem = document.createElement('li') //the ul in html
        anchor.addEventListener('click', () => populateShipView(starship))
        listItem.appendChild(anchor)
        navList.appendChild(listItem)
    })}
    
populateNav()

function populateShipView(shipData) {
    removeChildren(shipViewer)
    const shipImage = document.createElement('img')
    let shipNum = getLastNumber(shipData.url)
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImage.addEventListener('error', () => {
        console.log('Error, Image not avaliable')
        shipImage.hidden = true
        modal.classList.toggle('is-active')
        shipMessage.textContent = `The ship "${shipData.name}" has been lost in space`
    })
    shipViewer.appendChild(shipImage)
}



//for (let i = 0; i < starships.length; i++) { 
//let figure = document.createElement('figure')
//let figImage = document.createElement('img')
//let figCaption = document.createElement('figCaption')

//let shipNum = getLastNumber(starships[i].url)
//figImage.src =`https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
//figCaption.textContent = starships[i].name

//figure.appendChild(figImage)
//figure.appendChild(figCaption)
//shipList.appendChild(figure)
