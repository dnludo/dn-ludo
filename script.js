let currentPlayer = 0;

const players = [
"Red",
"Green",
"Yellow",
"Blue"
];

const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");
const turnText = document.getElementById("turnText");
const redHome = document.getElementById("redHome");
const greenHome = document.getElementById("greenHome");
const yellowHome = document.getElementById("yellowHome");
const blueHome = document.getElementById("blueHome");
const redToken = document.getElementById("redToken");

let redPosition = 0;
rollBtn.addEventListener("click", rollDice);

function rollDice(){

let number = Math.floor(Math.random()*6)+1;

dice.innerHTML = number;





if(number !== 6){
currentPlayer++;
if(currentPlayer > 3){
currentPlayer = 0;
}
}
document.getElementById("status").textContent =
players[currentPlayer] + "'s turn";
turnText.innerHTML =

"Current Turn: " + players[currentPlayer];
updateHighlight();
}
function updateHighlight(){

redHome.classList.remove("active-red");
greenHome.classList.remove("active-green");
yellowHome.classList.remove("active-yellow");
blueHome.classList.remove("active-blue");
redToken.classList.remove("active-token");
greenToken.classList.remove("active-token");
yellowToken.classList.remove("active-token");
blueToken.classList.remove("active-token");
if(players[currentPlayer] === "Red"){
redHome.classList.add("active-red");
redToken.style.background="#ff0000";
greenToken.style.background="#e0e0e0";
yellowToken.style.background="#e0e0e0";
blueToken.style.background="#e0e0e0";
redToken.classList.add("active-token");
}

if(players[currentPlayer] === "Green"){
greenHome.classList.add("active-green");
redToken.style.background="#e0e0e0";
greenToken.style.background="#00ff00";
yellowToken.style.background="#e0e0e0";
blueToken.style.background="#e0e0e0";
greenToken.classList.add("active-token");
}

if(players[currentPlayer] === "Yellow"){
yellowHome.classList.add("active-yellow");
redToken.style.background="#e0e0e0";
greenToken.style.background="#e0e0e0";
yellowToken.style.background="#ffff00";
blueToken.style.background="#e0e0e0";
yellowToken.classList.add("active-token");
}

if(players[currentPlayer] === "Blue"){
blueHome.classList.add("active-blue");
redToken.style.background="#e0e0e0";
greenToken.style.background="#e0e0e0";
yellowToken.style.background="#e0e0e0";
blueToken.style.background="#0099ff";
blueToken.classList.add("active-token");
}
}
updateHighlight();
