import { starships } from '../data/starships.js'
//let filmList = document.querySelector('#filmList')

for (let i = 0; i < starships.length; i++) { 
let figure = document.createElement('figure')
let figImage = document.createElement('img')
let figCaption = document.createElement('figCaption')

let shipNum = getLastNumber(starships[i].url)
figImage.src =`https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
figCaption.textContent = starships[i].name

figure.appendChild(figImage)
figure.appendChild(figCaption)
shipList.appendChild(figure)
}