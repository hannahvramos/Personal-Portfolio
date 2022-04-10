import { senators } from '../data/senators.js'
import { representative } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

const allCongressMembers = [...senators, ...representative]

const header = document.querySelector('header')
const main = document.querySelector('main')

const listDiv = document.querySelector('.listsDiv')
const senatorDiv = document.querySelector('.senatorsDiv')


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

//function populateListsDiv() {
 //   removeChildren()


const seniorityHeading = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')
const idList = document.querySelector('.idList')
const republicanList = document.querySelector('.republicanList')
const democraticList = document.querySelector('.democraticList')
const femaleList = document.querySelector('.femaleList')
const maleList = document.querySelector('.maleList')

//const seniorityButton = document.createElement('button')
//seniorityButton.textContent = 'Seniority'
//seniorityButton.addEventListener ('click', () => seniorityHeading, loyaltyButton

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => {
    return acc.seniority > senator.seniority ? acc : senator})
const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)
const biggestMissedVotesList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name).join(' and ')
seniorityHeading.textContent = `The most senior member of the senate is ${mostSeniorMember.name} and the biggest missed counts are ${biggestMissedVotesList}`

const loyaltyButton = document.createElement('button')
loyaltyButton.textContent = 'Loyal Senators'
loyaltyButton.addEventListener ('click', () => simplifiedSenators().forEach(simpleSenator => {
if (simpleSenator.loyaltyPct === 100) {
    let listItem = document.createElement('li')
    listItem.textContent = simpleSenator.name
    loyaltyList.appendChild(listItem)}}))
header.appendChild(loyaltyButton)

const idSenatorsButton = document.createElement('button')
idSenatorsButton.textContent = 'Identity and Democracy Senators'
idSenatorsButton.addEventListener ('click', () => simplifiedSenators().forEach(simpleSenator => {
if (simpleSenator.party === 'ID') {
        let listItem = document.createElement('li')
        listItem.textContent = simpleSenator.name
        idList.appendChild(listItem)}}))
header.appendChild(idSenatorsButton)

const republicanSenatorsButton = document.createElement('button')
republicanSenatorsButton.textContent = 'Republican Senators'
republicanSenatorsButton.addEventListener ('click', () => simplifiedSenators().forEach(simpleSenator => {
if (simpleSenator.party === 'R') {
        let listItem = document.createElement('li')
        listItem.textContent = simpleSenator.name
        republicanList.appendChild(listItem)}}))
header.appendChild(republicanSenatorsButton)

const democraticSenatorsButton = document.createElement('button')
democraticSenatorsButton.textContent = 'Democratic Senators'
democraticSenatorsButton.addEventListener ('click', () => simplifiedSenators().forEach(simpleSenator => {
if (simpleSenator.party === 'D') {
        let listItem = document.createElement('li')
        listItem.textContent = simpleSenator.name
        democraticList.appendChild(listItem)}}))
header.appendChild(democraticSenatorsButton)

const femaleSenatorsButton = document.createElement('button')
femaleSenatorsButton.textContent = 'Female Senators'
femaleSenatorsButton.addEventListener ('click', () => simplifiedSenators().forEach(simpleSenator => {
if (simpleSenator.gender === 'F') {
        let listItem = document.createElement('li')
        listItem.textContent = simpleSenator.name
        femaleList.appendChild(listItem)}}))
header.appendChild(femaleSenatorsButton)

const maleSenatorsButton = document.createElement('button')
maleSenatorsButton.textContent = 'Male Senators'
maleSenatorsButton.addEventListener ('click', () => simplifiedSenators().forEach(simpleSenator => {
if (simpleSenator.gender === 'M') {
        let listItem = document.createElement('li')
        listItem.textContent = simpleSenator.name
        maleList.appendChild(listItem)}}))
header.appendChild(maleSenatorsButton)


//incorparate members of the house of representatives