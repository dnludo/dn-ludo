let currentTurn = 0;

let playerColors = [];

let redPosition = -1;
let greenPosition = -1;
let yellowPosition = -1;
let bluePosition = -1;

let lastDice = 0;

const trackPositions = [];

document.getElementById("app").innerHTML = `
<div class="splash-screen">
<h1>DN LUDO</h1>
<p>Presented by HK Games & Co.</p>

<button id="playBtn">
PLAY NOW
</button>
</div>
`;

document
.getElementById("playBtn")
.addEventListener("click", showMenu);

function showMenu(){

document.getElementById("app").innerHTML = `
<div class="menu-screen">

<h1>DN LUDO</h1>

<button class="menu-btn" id="playGameBtn">
Play Game
</button>

<button class="menu-btn">
Players
</button>

<button class="menu-btn">
Settings
</button>

<button class="menu-btn">
About
</button>

</div>
`;

document
.getElementById("playGameBtn")
.addEventListener("click", showPlayerSelection);

}

function showPlayerSelection(){

document.getElementById("app").innerHTML = `
<div class="menu-screen">

<h1>Select Players</h1>

<button class="menu-btn"
onclick="startGame(2)">
2 Players
</button>

<button class="menu-btn"
onclick="startGame(3)">
3 Players
</button>

<button class="menu-btn"
onclick="startGame(4)">
4 Players
</button>

<button class="menu-btn"
onclick="showMenu()">
Back
</button>

</div>
`;

}

function startGame(players){

redPosition = -1;
greenPosition = -1;
yellowPosition = -1;
bluePosition = -1;

currentTurn = 0;

if(players === 2){
playerColors = ["Red","Green"];
}

if(players === 3){
playerColors = ["Red","Green","Yellow"];
}

if(players === 4){
playerColors = ["Red","Green","Yellow","Blue"];
}

document.getElementById("app").innerHTML = `
<div class="menu-screen">

<h1>DN LUDO</h1>

<h2>${players} Players Selected</h2>

<button class="menu-btn"
id="startMatchBtn">
Start Match
</button>

<button class="menu-btn"
onclick="showPlayerSelection()">
Back
</button>

</div>
`;

document
.getElementById("startMatchBtn")
.addEventListener("click", showBoard);

}

function showBoard(){

document.getElementById("app").innerHTML = `
<div class="board-screen">

<div class="board">

<div class="home red">
<div class="token r1"></div>
<div class="token r2"></div>
<div class="token r3"></div>
<div class="token r4"></div>
</div>

<div class="home green">
<div class="token g1"></div>
<div class="token g2"></div>
<div class="token g3"></div>
<div class="token g4"></div>
</div>

<div class="home yellow">
<div class="token y1"></div>
<div class="token y2"></div>
<div class="token y3"></div>
<div class="token y4"></div>
</div>

<div class="home blue">
<div class="token b1"></div>
<div class="token b2"></div>
<div class="token b3"></div>
<div class="token b4"></div>
</div>

<div class="track" id="track"></div>

<div class="center-star">⭐</div>

</div>

<h2 id="turnText">
Current Turn: ${playerColors[currentTurn]}
</h2>

<h2 id="diceValue">
🎲 1
</h2>

<button class="menu-btn" id="rollDiceBtn">
Roll Dice
</button>

<button class="menu-btn" onclick="showMenu()">
Main Menu
</button>

</div>
`;

document
.getElementById("rollDiceBtn")
.addEventListener("click", rollDice);

createTrack();

}

function rollDice(){

const dice =
Math.floor(Math.random() * 6) + 1;

document.getElementById("diceValue")
.innerHTML = "🎲 " + dice;

if(dice !== 6){

currentTurn++;

if(currentTurn >= playerColors.length){
currentTurn = 0;
}

}

document.getElementById("turnText")
.innerHTML =
"Current Turn: " +
playerColors[currentTurn];

}

function createTrack(){

const track =
document.getElementById("track");

if(!track) return;

track.innerHTML = "";

trackPositions.length = 0;

for(let i = 0; i < 52; i++){

const cell =
document.createElement("div");

cell.className = "track-cell";

const angle =
(i / 52) * Math.PI * 2;

const x =
250 + Math.cos(angle) * 180;

const y =
250 + Math.sin(angle) * 180;

cell.style.left = x + "px";
cell.style.top = y + "px";

track.appendChild(cell);

trackPositions.push([x,y]);

}

}
