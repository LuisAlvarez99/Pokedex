let pkmnImg = document.getElementById('pkmn-img')
let pkmnSelect = document.getElementById('pkmn-select')

let newPkmn = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${input}.png`

submit.addEventListener('keyup', () => {
  pkmnImg.style.backgroundImage = 'url(`${newPkmn}`)'
  pkmnImg.style.backgroundSize = 'cover'
})


// console.log('this is working')
