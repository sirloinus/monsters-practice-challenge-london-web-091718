// let page_num = 1

// const getMonsters = page_num => 
//     fetch("http://localhost:3000/monsters/?_limit=50&_page=${page_num}")
//         .then(resp => resp.json())


const getMonsters = () =>
    fetch("http://localhost:3000/monsters")
    .then(resp => resp.json())

const getMonster = id =>
    fetch("http://localhost:3000/monsters/${id}")
        .then(resp => resp.json())

const createMonster = monster =>
    fetch("http://localhost:3000/monsters", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(monster)
    })


