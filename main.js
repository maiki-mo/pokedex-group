let subButton = document.querySelector("#submit-p");
subButton.addEventListener("click", alerter);
function alerter() {
    alert("This feature is not yet active");
}

function flareon() {
    let flarName = document.querySelector("#flar-name");
    let flarHp = document.getElementById("flar-hp");
    let flarAttack = document.getElementById("flar-attack");
    let flarDefense = document.getElementById("flar-defense");
    let flarAbilities = document.getElementById("flar-abilities");

    flarName.innerHTML = pokeDex[2].name;
    flarHp.innerHTML = pokeDex[2].stats[5].base_stat;
    flarAttack.innerHTML = pokeDex[2].stats[4].base_stat;
    flarDefense.innerHTML = pokeDex[2].stats[3].base_stat;
    flarAbilities.innerHTML = pokeDex[2].abilities[0].ability.name + ", " + pokeDex[0].abilities[1].ability.name;
}

setTimeout(flareon, 8000);

function vaporeon() {
    let varName = document.querySelector("#var-name");
    let varHp = document.getElementById("var-hp");
    let varAttack = document.getElementById("var-attack");
    let varDefense = document.getElementById("var-defense");
    let varAbilities = document.getElementById("var-abilities");

    varName.innerHTML = pokeDex[0].name;
    varHp.innerHTML = pokeDex[0].stats[5].base_stat;
    varAttack.innerHTML = pokeDex[0].stats[4].base_stat;
    varDefense.innerHTML = pokeDex[0].stats[3].base_stat;
    varAbilities.innerHTML = pokeDex[0].abilities[0].ability.name + ", " + pokeDex[0].abilities[1].ability.name;
}

setTimeout(vaporeon, 8000);

function jolteon() {
    let joltName = document.querySelector("#jolt-name");
    let joltHp = document.getElementById("jolt-hp");
    let joltAttack = document.getElementById("jolt-attack");
    let joltDefense = document.getElementById("jolt-defense");
    let joltAbilities = document.getElementById("jolt-abilities");

    joltName.innerHTML = pokeDex[1].name;
    joltHp.innerHTML = pokeDex[1].stats[5].base_stat;
    joltAttack.innerHTML = pokeDex[1].stats[4].base_stat;
    joltDefense.innerHTML = pokeDex[1].stats[3].base_stat;
    joltAbilities.innerHTML = pokeDex[1].abilities[0].ability.name + ", " + pokeDex[0].abilities[1].ability.name;
}

setTimeout(jolteon, 8000);

function gengar() {
    let gengarName = document.getElementById("gengar-name");
    let gengarHp = document.getElementById("gengar-hp");
    let gengarAttack = document.getElementById("gengar-attack");
    let gengarDefense = document.getElementById("gengar-defense");
    let gengarAbilities = document.getElementById("gengar-abilities");

    gengarName.innerHTML = geng[0].name
    gengarHp.innerHTML = geng[0].hp
    gengarAttack.innerHTML = geng[0].attack
    gengarDefense.innerHTML = geng[0].defense
    gengarAbilities.innerHTML = geng[0].abilities;
}

setTimeout(gengar, 6000);

function hitmonlee() {
    let hitmonleeName = document.getElementById("hitmonlee-name");
    let hitmonleeHp = document.getElementById("hitmonlee-hp");
    let hitmonleeAttack = document.getElementById("hitmonlee-attack");
    let hitmonleeDefense = document.getElementById("hitmonlee-defense");
    let hitmonleeAbilities = document.getElementById("hitmonlee-abilities");

    hitmonleeName.innerHTML = hit[0].name
    hitmonleeHp.innerHTML = hit[0].hp
    hitmonleeAttack.innerHTML = hit[0].attack
    hitmonleeDefense.innerHTML = hit[0].defense
    hitmonleeAbilities.innerHTML = hit[0].abilities;
}

setTimeout(hitmonlee, 6000);

function kabutops() {
    let kabutopsName = document.getElementById("kabutops-name");
    let kabutopsHp = document.getElementById("kabutops-hp");
    let kabutopsAttack = document.getElementById("kabutops-attack");
    let kabutopsDefense = document.getElementById("kabutops-defense");
    let kabutopsAbilities = document.getElementById("kabutops-abilities");

    kabutopsName.innerHTML = kabu[0].name
    kabutopsHp.innerHTML = kabu[0].hp
    kabutopsAttack.innerHTML = kabu[0].attack
    kabutopsDefense.innerHTML = kabu[0].defense
    kabutopsAbilities.innerHTML = kabu[0].abilities;
}

setTimeout(kabutops, 6000);