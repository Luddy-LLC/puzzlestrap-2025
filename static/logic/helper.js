////////////////////// MISC //////////////////////

// camelise() camel-cases the input string
export function camelise(str) {
    return str.replaceAll("-", "").replaceAll(" ", "").replaceAll("_", "").replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}


////////////////////// COOKIES //////////////////////

export function setCookie(e,o,t){const n=new Date;n.setTime(n.getTime()+864e5*t),document.cookie=`${e}=${o};path=/;expires=${n.toGMTString()}`}
export function getCookie(e){const o=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return o?o[2]:null}
export function deleteCookie(e){setCookie(e,"",-1)}

export function loginUser(team, name) {
    deleteCookie("name");
    deleteCookie("team");
    setCookie("name", name, 365);
    setCookie("team", team, 365);
}

export function logoutUser() {
    deleteCookie("name");
    deleteCookie("team");
}

////////////////////// ANSWER CHECKING //////////////////////

// loginNeeded() checks if the user must login to use the page
export function loginNeeded(){const e=document.getElementsByTagName("html")[0].getAttribute("data-page");if(!("auth-req"!==e&&"puzzle"!==e||getCookie("team")&&getCookie("name")))return!0}

// clearAnswer() clears a puzzle answer field and resets validation
export function clearAnswer(){document.getElementById("correct").style.display="none",document.getElementById("incorrect").style.display="none",document.getElementById("technical-error").style.display="none",document.getElementById("answer").value=""}

// checkAnswer() handles answer validation
export async function checkAnswer(team,person,puzzle,answer) {
    // const response = await fetch(...);
    // const json = await response.json();
    // console.log(team,person,puzzle,answer);
    return {result: "correct"};
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