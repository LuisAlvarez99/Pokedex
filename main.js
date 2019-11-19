const pkmnList = document.getElementById('pkmn-list')

let thing = document.getElementById('section')

let player = document.getElementsByClassName('team-member')

for (var i = 0; i < player.length; i++) {
    player[i].addEventListener('click', () => {
      thing.style.display = 'block'
    });
}


let moveList = document.getElementById('move-list')

let sum = document.getElementById('summary')

for (var i = 0; i < moveList.length; i++) {
    moveList[i].addEventListener('click', () => {
      summary.style.display = 'block'
    });
}
// const pkmnSelect = document.getElementById('pkmn-select').value


//this is a function that can be a part of my class for pokemon
// const fetchPokemon = () => {
//     const promises = []
//     for (let i = 1; i <= 802; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`
//         promises.push(fetch(url).then((res) => res.json()))
//     }
//     Promise.all(promises).then((results) => {
//         const pokemon = results.map((result) => ({
//             name: result.name,
//             image: result.sprites['front_default'],
//             type: result.types.map((type) => type.type.name).join(', '),
//             id: result.id
//         }))
//         displayPokemon(pokemon)
//     })
// }
//
// const displayPokemon = (pokemon) => {
//     console.log(pokemon)
//     const pokemonHTMLString = pokemon
//         .map(
//             (pokeman) => `
//         <li class="card">
//             <img class="card-image" src="${pokeman.image}"/>
//             <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
//             <p class="card-subtitle">Type: ${pokeman.type}</p>
//         </li>
//     `
//         )
//         .join('')
//     pkmnList.innerHTML = pokemonHTMLString
// }
//
// fetchPokemon()
