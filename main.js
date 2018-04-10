let pokeAll = []
pokeAll.push(pokeDex);
pokeAll.push(allPokemon);

let subButton = document.querySelector("#submit-p");
subButton.addEventListener("click", alerter);
function alerter() {
    alert("This feature is not yet active");
}

function gengar() {
    let gengarName = document.getElementById("gengar-name");
    let gengarHp = document.getElementById("gengar-hp");
    let gengarAttack = document.getElementById("gengar-attack");
    let gengarDefense = document.getElementById("gengar-defense");
    let gengarAbilities = document.getElementById("gengar-abilities");

    gengarName.innerHTML = pokeAll[1][2].name
    gengarHp.innerHTML = pokeAll[1][2].hp
    gengarAttack.innerHTML = pokeAll[1][2].attack
    gengarDefense.innerHTML = pokeAll[1][2].defense
    gengarAbilities.innerHTML = pokeAll[1][2].abilities;
}

setTimeout(gengar, 5000);

function hitmonlee() {
    let hitmonleeName = document.getElementById("hitmonlee-name");
    let hitmonleeHp = document.getElementById("hitmonlee-hp");
    let hitmonleeAttack = document.getElementById("hitmonlee-attack");
    let hitmonleeDefense = document.getElementById("hitmonlee-defense");
    let hitmonleeAbilities = document.getElementById("hitmonlee-abilities");

    hitmonleeName.innerHTML = pokeAll[1][2].name
    hitmonleeHp.innerHTML = pokeAll[1][2].hp
    hitmonleeAttack.innerHTML = pokeAll[1][2].attack
    hitmonleeDefense.innerHTML = pokeAll[1][2].defense
    hitmonleeAbilities.innerHTML = pokeAll[1][2].abilities;
}

setTimeout(hitmonlee, 6000);

function kabutops() {
    let kabutopsName = document.getElementById("kabutops-name");
    let kabutopsHp = document.getElementById("kabutops-hp");
    let kabutopsAttack = document.getElementById("kabutops-attack");
    let kabutopsDefense = document.getElementById("kabutops-defense");
    let kabutopsAbilities = document.getElementById("kabutops-abilities");

    kabutopsName.innerHTML = pokeAll[1][2].name
    kabutopsHp.innerHTML = pokeAll[1][2].hp
    kabutopsAttack.innerHTML = pokeAll[1][2].attack
    kabutopsDefense.innerHTML = pokeAll[1][2].defense
    kabutopsAbilities.innerHTML = pokeAll[1][2].abilities;
}

setTimeout(kabutops, 7000);