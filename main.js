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
  let player = prompt('What is your name?', 'Trainer ')
  let gen = prompt('Select your gender', 'male or female')
  let x = prompt('Enter a trainer number 1-109', '44')
  let span = document.createElement('span')
  span.setAttribute('onclick','showDiv()')
  span.className = 'team-member'
  span.innerHTML = `<h3>${player}</h3>
                    <img src="http://www.pokestadium.com/assets/img/tools/trainercard/trainers/${gen}/${x}.png" alt="" width='33%' height='auto'>
                    `
  team.appendChild(span)
})

let form = document.getElementById('search-form')
form.addEventListener('submit', (event) => {
  let val = document.getElementById('search-box').value
  event.preventDefault()
  pika.queryPokemonAPI(val)
  setTimeout(function(){pika.drawPkmn()}, 100)
})

class Pokemon {
  constructor() {
    this.link =
    this.name =
    this.hp =
    this.atk =
    this.def =
    this.abil = []
  }
  async queryPokemonAPI(val) {
    let req =  await fetch(`https://pokeapi.co/api/v2/pokemon/${val}`)
    let data =  await req.json()
    this.link = data.sprites.front_default
    this.name = data.name
    this.hp = data.stats[5].base_stat
    this.atk = data.stats[4].base_stat
    this.def = data.stats[3].base_stat
    for(let i in data.abilities) {
      let aName = data.abilities[i].ability.name
      this.abil.push(aName)
      console.log(aName)
    }
    console.log(data)
  }


  drawPkmn() {
  let ol = document.getElementById('pkmn-list')
  let div = document.createElement('div')
  div.setAttribute('class', 'poke-card')
  ol.appendChild(div)
  div.innerHTML= `<p>Pokemon: ${this.name}</p>
                  <img src = "${this.link}" width="30%" height="auto">
                  <div class="stat-track">
                  <p> Pokemon HP: ${this.hp}</p>
                  <p> Pokemon ATK: ${this.atk}</p>
                  <p> Pokemon DEF: ${this.def}</p>
                  <p> Pokemon Abilities: ${this.abil}</p>
                  </div>`
                }
  }

  class Trainer {
    constructor(name) {
      this.name = name
      this.team = []
    }
  }
