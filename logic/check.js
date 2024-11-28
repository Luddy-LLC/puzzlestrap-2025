export async function checkAnswer(team,person,puzzle,answer) {
    // const response = await fetch(...);
    // const json = await response.json();
    // console.log(team,person,puzzle,answer);
    return {result: "correct"};
}

export function getPerson() {
    return {
        "team" : "You're never going to guess our team name!!",
        "name" : "Reece"
    }
}

export function autoFill() {
    document.getElementById('team').value = getPerson().team
    document.getElementById('name').value = getPerson().name
    document.getElementById('puzzle').value = document.getElementsByTagName('html')[0].getAttribute('data-puzzle');
}

export function clearAnswer() {
    document.getElementById('correct').style.display = 'none';
    document.getElementById('incorrect').style.display = 'none';
    document.getElementById('technical-error').style.display = 'none';
    document.getElementById('team').value = "";
    document.getElementById('name').value = "";
    document.getElementById('puzzle').value = "";
    document.getElementById('answer').value = "";
}


// fetch("", {
//     method: "post",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: JSON.stringify({
//         "team": document.getElementById('team').value,
//         "person": document.getElementById('name').value,
//         "puzzle": document.getElementById('puzzle').value,
//         "answer": document.getElementById('answer').value.toLowerCase()
//     })
// })