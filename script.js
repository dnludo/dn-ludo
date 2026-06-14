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

rollBtn.addEventListener("click", rollDice);

function rollDice(){

let number = Math.floor(Math.random()*6)+1;

dice.innerHTML = number;

document.getElementById("status").textContent = players[currentPlayer] + " rolled " + number;



if(number !== 6){
currentPlayer++;
if(currentPlayer > 3){
currentPlayer = 0;
}
}

turnText.innerHTML =
players[currentPlayer] + " Turn";

}
