let allPokemon = [];

class Pokemon{
    constructor(name,hp,attack,defense,abilities=[]){
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
    }

    addAbility(ability){
        this.abilities.push(ability)
    }
}

// individual class
class Ronnie{
    constructor(){
        this.pokemon = []
    }

    all(){
        return this.pokemon
    }

    add(pokemon){
        this.pokemon.push(pokemon)
    }
    
    get(pokemon){
        for(i=0;i < this.all.length;i++){
            if (this.all[i].name === pokemon){
                return this.all[i];
            }
        }
    }
}

let ronnie = new Ronnie()

axios.get("https://pokeapi.co/api/v2/pokemon/gengar/")
.then((response) => {
    let data =  response.data
    let pokeName = document.getElementById("gengar-name")
    let hp = document.getElementById("gengar-hp")
    let attack = document.getElementById("gengar-attack")
    let defense = document.getElementById("gengar-defense")
    let abilities = document.getElementById("gengar-abilities")



    let gengar = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )
    allPokemon.push(gengar);

    // data.abilities.forEach((item) => {
    //     gengar.addAbility(item.ability.name)
        
    //     abilities.innerHTML += item.ability.name + ""
    // })

    // ronnie.add(gengar)
    // pokeName.innerHTML = gengar.name
    // hp.innerHTML = gengar.hp
    // attack.innerHTML = gengar.attack
    // defense.innerHTML = gengar.defense

console.log(gengar);    
}).catch((error) => {
    console.log(error)
  })



axios.get("https://pokeapi.co/api/v2/pokemon/hitmonlee/")
.then((response) => {
    let data =  response.data
    let pokeName = document.getElementById("hitmonlee-name")
    let hp = document.getElementById("hitmonlee-hp")
    let attack = document.getElementById("hitmonlee-attack")
    let defense = document.getElementById("hitmonlee-defense")
    let abilities = document.getElementById("hitmonlee-abilities")



    let hitmonlee = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )
    
allPokemon.push(hitmonlee);
    // data.abilities.forEach((item) => {
    //     hitmonlee.addAbility(item.ability.name)
        
    //     abilities.innerHTML += item.ability.name + ", "
    // })

    // ronnie.add(hitmonlee)
    // pokeName.innerHTML = hitmonlee.name
    // hp.innerHTML = hitmonlee.hp
    // attack.innerHTML = hitmonlee.attack
    // defense.innerHTML = hitmonlee.defense

console.log(hitmonlee);    
}).catch((error) => {
    console.log(error)
  })





axios.get("https://pokeapi.co/api/v2/pokemon/kabutops/")
.then((response) => {
    let data =  response.data
    let pokeName = document.getElementById("kabutops-name")
    let hp = document.getElementById("kabutops-hp")
    let attack = document.getElementById("kabutops-attack")
    let defense = document.getElementById("kabutops-defense")
    let abilities = document.getElementById("kabutops-abilities")



    let kabutops = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )

    allPokemon.push(kabutops);
    // data.abilities.forEach((item) => {
    //     kabutops.addAbility(item.ability.name)
        
    //     abilities.innerHTML += item.ability.name + ", "
    // })

    // ronnie.add(kabutops)
    // pokeName.innerHTML = kabutops.name
    // hp.innerHTML = kabutops.hp
    // attack.innerHTML = kabutops.attack
    // defense.innerHTML = kabutops.defense

console.log(kabutops);    
}).catch((error) => {
    console.log(error)
  })


