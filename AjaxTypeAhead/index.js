// const fetch = require('node-fetch');
console.log('Welcome to JavaScript') ; 
const cities = [] ; 
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json') 
    .then(blob => blob.json())
    .then(data => cities.push(...data))

function findMatches(wordToMatch, word){
    return cities.filter(place=>{
        const regex = new RegExp(wordToMatch,'gi') ;
        return place.city.match(regex) || place.state.match(regex) ;
    })
}    
const search = document.querySelector('#searchbar') ;
const suggestion = document.querySelector('.suggestion') ;
function displayMatches() {
    const matches = findMatches(this.value,cities) ; 
    const html = matches.map(place=>{
        return `
          <li>
            <span class="name">${place.city},${place.state}</span>
            <span class="population">,${place.population}</span>
         </li>   
        ` ;
    }).join('') ;
    suggestion.innerHTML = html ;
}

search.addEventListener('change',displayMatches) ;
search.addEventListener('keyup',displayMatches) ;