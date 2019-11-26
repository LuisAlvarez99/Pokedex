let section = document.getElementById('poke-team')
let plusPkmn = document.getElementById('add-pkmn')
let minPkmn = document.getElementById('remove-pkmn')
let summary = document.getElementById('move-sum')
let team = document.getElementById('team-container')
let pokemen = document.getElementById('poke-btn')



// link to trainer sprites for men (http://www.pokestadium.com/assets/img/tools/trainercard/trainers/male/177.png)
// link to trainer sprites for women (http://www.pokestadium.com/assets/img/tools/trainercard/trainers/female/109.png)

function showDiv() {
  if(section.style.display == 'grid'){
  section.style.display = 'none'
} else {
  section.style.display = 'grid'
}
}
pokemen.setAttribute("onclick", "showDiv()")

function showMoves() {
  if(summary.style.display === 'block'){
    summary.style.display = 'none'
  } else {
    summary.style.display = 'block'
  }
}
minPkmn.style.opacity = '0'

function pkmnTeam() {
  if(trainer.team.length < 6) {
  let val = prompt('Choose your pokemon')
  pika.queryPokemonAPI(val)
  setTimeout(function() {
  let div = document.createElement('div')
  div.setAttribute('class', 'poke-card')
  section.appendChild(div)
  div.innerHTML = `<img src="${pika.link}">
                   <h3> ${pika.name}</h3>
                   <p>${pika.hp}/${pika.hp}</p>`
                 },800)
}
else{plusPkmn.style.opacity = '0'}
}
plusPkmn.setAttribute('onclick', 'pkmnTeam()')

let btn = document.getElementById('team-btn')
btn.addEventListener('click', () => {
  let player = prompt('What is your name?', 'Trainer ')
  let gen = prompt('Select your gender', 'male or female').toLowerCase()
  let x = prompt('Enter a trainer number 1-109', '44')
  let span = document.createElement('span')
  span.className = 'team-member'
  span.innerHTML = `<h3 id='trainer-name'>${player}</h3>
                    <img src="http://www.pokestadium.com/assets/img/tools/trainercard/trainers/${gen}/${x}.png" alt="" width='28%' height='auto' id='trainer-pic'>
                    `
  team.appendChild(span)
})

let form = document.getElementById('search-form')
form.addEventListener('submit', (event) => {
  let val = document.getElementById('search-box').value
  event.preventDefault()
  pika.queryPokemonAPI(val)
  setTimeout(function(){pika.drawPkmn()}, 800)
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
    if(trainer.team.length < 6){
    trainer.team.push(this)}
    else {
      alert("Team full")
    }
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
    all() {
      return this.team
    }
    get(name) {
      return this.team[name]
    }
  }

let pika = new Pokemon()
let trainer = new Trainer()
