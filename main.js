let section = document.getElementById('section')
let moveList = document.getElementById('move-list')
let summary = document.getElementById('move-sum')
let team = document.getElementById('team-container')
let player = document.getElementsByClassName('team-member')
let btn = document.getElementById('team-btn')

// link to trainer sprites for men (http://www.pokestadium.com/assets/img/tools/trainercard/trainers/male/177.png)
// link to trainer sprites for women (http://www.pokestadium.com/assets/img/tools/trainercard/trainers/female/109.png)

function showDiv() {
  section.style.display = 'block'
}

function showMoves() {
  summary.style.display = 'block'
}
section.setAttribute('onclick', 'showMoves()')

btn.addEventListener('click', () => {
  let player = prompt('enter your name')
  let gen = prompt('male of female?')
  let x = prompt('enter trainer number(1-109)')
  let span = document.createElement('span')
  span.setAttribute('onclick','showDiv()')
  span.className = 'team-member'
  span.innerHTML = `<h3>${player}</h3>
                    <img src="http://www.pokestadium.com/assets/img/tools/trainercard/trainers/${gen}/${x}.png" alt="" width='33%' height='auto'>
                    `
  team.appendChild(span)
  let trainer = new Trainer(`${player}`)
})




let form = document.getElementById('search-form')
form.addEventListener('submit', (event) => {
  let val = document.getElementById('search-box').value
  event.preventDefault()
  queryPokemonAPI(val)
})


  queryPokemonAPI = async (val) => {
    let req =  await fetch(`https://pokeapi.co/api/v2/pokemon/${val}`)
    let data =  await req.json()

    let poke = {
      link: data.sprites.front_default,
      name: data.name,
      stats: {
        hp: data.stats[5].base_stat,
        atk: data.stats[4].base_stat,
        def: data.stats[3].base_stat
      }
    }

    for(let i in data.abilities) {
      let aName = data.abilities[i].ability.name
      poke.abil = aName
      console.log(aName)
    }
    drawPkmn(poke)
  }


drawPkmn = (poke) => {
  let ol = document.getElementById('pkmn-list')
  let div = document.createElement('div')
  div.setAttribute('class', 'poke-card')
  ol.appendChild(div)
  div.innerHTML= `<p>Pokemon: ${poke.name}</p>
                  <img src = "${poke.link}" width="30%" height="auto">
                  <div class="stat-track">
                  <p> Pokemon HP: ${poke.stats.hp}</p>
                  <p> Pokemon ATK: ${poke.stats.atk}</p>
                  <p> Pokemon DEF: ${poke.stats.def}</p>
                  <p> Pokemon Abilities: ${poke.abil}</p>
                  </div>`
}

class Trainer {
  constructor(name) {
    this.name = name
    this.team = []
  }
  addPokemon() {

  }
}

class Pokemon {
  constructor() {

  }

}
