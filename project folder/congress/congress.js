import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const allCongressMembers = [...senators, ...representatives]
const senatorDiv = document.querySelector('.senatorsDiv')
const seniorityHeading = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')
const simpleSenators = simplifiedSenators()
//const mostSeniorSenator = simplifiedSenators().reduce((acc, senator))
const biggestMissedVotesPct = simplifiedSenators().reduce(
    (acc, senator) => acc.missedVotesPct ? acc : senator)
const biggestMissedVotesList = simplifiedSenators().filter(
    senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name)

function simplifiedSenators() {
    return senators.map(senator => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
        id: senator.id,
        name: `${senator.first_name}${middlename}${senator.last_name}`,
        party: senator.party,
        gender: senator.gender,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govetrack_id}-100px.jpeg`,
        seniority: +senator.seniority,
        //missedVotesPct: senator.missedVotes,
    }}}

function popularSenatorDiv(simpleSenators) {
    simpleSenators.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')
        figImg.src = senator.imgURL
        figCaption.textContent = senator.name
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    })}

    populate.SenatorDiv(simpleSenators)
    //create figure and image and caotion, set the image src to sneators url, append them to dom



//add the senior senators and missed votes
//UI for sorting by party / gender with count
//styling of grid and buttons
//link their pages
//incorparate members of the house of representatives