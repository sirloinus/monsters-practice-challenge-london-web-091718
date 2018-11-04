const name = document.querySelector("#monster-name")
const age = document.querySelector("#monster-age")
const description = document.querySelector("#monster-description")
const monsterList = document.querySelector("#monster-list")
const monsterForm = document.querySelector("#monster-form")
const back = document.querySelector("#back")
const forward = document.querySelector("#forward")

back.addEventListener("click", event => {
    event.preventDefault()

    //make next page load
})

monsterForm.addEventListener("submit", event => {
    event.preventDefault()

    const monster = {
        name: name.value,
        age: age.value,
        description: description.value
    }

    createMonster(monster)
        .then(monster => addMonster(monster))
        .catch(error => alert("Sorrrryyyyy"))

    name.value = ""
    age.value = ""
    description.value = ""
})

const addMonster = monster => {
    const monsterEl = document.createElement("li")
    monsterEl.innerHTML = `
    <li>
        <h3>Name: ${monster.name}</h3>
        <h3>Age: ${monster.age}</h3>
        <h4>${monster.description}</h4>
    </li>
    `
    monsterList.appendChild(monsterEl)
}

const addMonsters = monsters =>
    monsters.forEach(monster => addMonster(monster))

getMonsters()
    .then(monsters => addMonsters(monsters))