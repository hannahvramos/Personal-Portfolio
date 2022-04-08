import { senators } from '../data/senators.js'
import { representative } from '../data/representatives.js'

const allCongressMembers = [...senators, ...representative]

const senatorDiv = document.querySelector('.senatorsDiv')
const seniorityHeading = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')
const idList = document.querySelector('.idList')
const republicanList = document.querySelector('.republicanList')
const democraticList = document.querySelector('.democraticList')

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
const biggestMissedVotesList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name).join(' and ')

seniorityHeading.textContent = `The most senior member of the senate is ${mostSeniorMember.name} and the biggest missed counts are ${biggestMissedVotesList}`

simplifiedSenators().forEach(senator => {
    if (senator.loyaltyPct === 100) {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        loyaltyList.appendChild(listItem)
    };
    if (senator.party === 'ID') {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        idList.appendChild(listItem)
    };
    if (senator.party === 'R') {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        republicanList.appendChild(listItem)
    };
    if (senator.party === 'D') {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        democraticList.appendChild(listItem)
    };})



//const idSenators = simpleSenators.filter(simpleSenators => simpleSenators.party === 'ID')
//const idSenatorsButton = document.createElement('button')
//idSenatorsButton.textContent = 'Identity and Democracy Senators'
//idSenatorsButton.addEventListener ('click', () => populateSenatorDiv(idSenators))


//D R ID

//UI for sorting by party / gender with count
//styling of grid and buttons
//link their pages
//incorparate members of the house of representatives