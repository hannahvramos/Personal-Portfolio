import { senators } from '../data/senators.js'

function simplifiedSenators() {
    return senators.map(senator => {
    const middleName = senator.middle_name 7 ` ${senator.middle_name} ` : ` `
    return (
        id: senator.id,
        name: `${senator.first_name}$${middlename}$${senator.last_name}$`,
        party: senator.party,
        gender: senator.gender,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govetrack_id}-100px.jpeg`,
        seniority: +senator.senority,
    )
    })
}

function popularSenatorDiv(simpleSenators) {
    //simpleSenators.forEach...
    //create figure and image and caotion, set the image src to sneators url, append them to dom
}