import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const allCongressMembers = [...senators, ...representatives]

const senatorDiv = document.querySelector('.senatorsDiv')
const seniorityHeading = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')

function simplifiedSenators() {
    return senators.map(senator => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        party: senator.party,
        gender: senator.gender,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
        seniority: +senator.seniority,
        missedVotesPct: senator.missed_votes_pct,
        loyaltyPct: senator.votes_with_party_pct,
    }})}

const simpleSenators = simplifiedSenators()

function populateSenatorDiv(senatorArray) {
    senatorArray.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')
        figImg.src = senator.imgURL
        figCaption.textContent = senator.name
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    })}

populateSenatorDiv(simpleSenators)

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => {
    return acc.seniority > senator.seniority ? acc : senator})
const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)
const biggestMissedVotesList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name)

seniorityHeading.textContent = `The most senior memeber of the senate is ${mostSeniorMember.name} and the biggest missed counts are ${biggestMissedVotesList}`

simplifiedSenators().forEach(senator => {
    if(senator.loyaltyPct === 100) {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        loyaltyList.appendChild(listItem)
    }})
//?create figure and image and caotion, set the image src to sneators url, append them to dom

//add the senior senators and missed votes
//UI for sorting by party / gender with count
//styling of grid and buttons
//link their pages
//incorparate members of the house of representatives