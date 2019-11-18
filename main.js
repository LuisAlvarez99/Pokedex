let pkmnSelect = document.getElementById('pkmn-select')
let pkmnDiv = document.getElementById('pkmn-img')
const img = document.createElement('img')


// let pkmnPic = url(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${p}.png`)


pkmnSelect.addEventListener('onkeyup', createPokemon())

function createPokemon() {
  let p = pkmnSelect.value
  pkmnDiv.appendChild(img)
  img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${p}.png`

}
