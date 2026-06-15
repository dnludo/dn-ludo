let currentTurn = 0;
let playerColors = [];

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

function showMenu() {
document.getElementById("app").innerHTML = `
<div class="menu-screen">
<h1>DN LUDO</h1>

<button class="menu-btn" id="playGameBtn">Play Game</button>
<button class="menu-btn">Players</button>
<button class="menu-btn">Settings</button>
<button class="menu-btn">About</button>

</div>
`;

document
.getElementById("playGameBtn")
.addEventListener("click", showPlayerSelection);
}

function showPlayerSelection() {
document.getElementById("app").innerHTML = `
<div class="menu-screen">
<h1>Select Players</h1>

<button class="menu-btn" onclick="startGame(2)">2 Players</button>
<button class="menu-btn" onclick="startGame(3)">3 Players</button>
<button class="menu-btn" onclick="startGame(4)">4 Players</button>

<button class="menu-btn" onclick="showMenu()">Back</button>

</div>
`;
}

function startGame(players) {

window.totalPlayers = players;

if(players === 2){
playerColors = ["Red","Green"];
}

if(players === 3){
playerColors = ["Red","Green","Yellow"];
}

if(players === 4){
playerColors = ["Red","Green","Yellow","Blue"];
}

currentTurn = 0;

document.getElementById("app").innerHTML = `
<div class="menu-screen">

<h1>DN LUDO</h1>

<h2>${players} Players Selected</h2>

<button class="menu-btn" id="startMatchBtn">
Start Match
</button>

<button class="menu-btn" onclick="showPlayerSelection()">
Back
</button>

</div>
`;

document
.getElementById("startMatchBtn")
.addEventListener("click", showBoard);
}

function showBoard() {

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

<div class="center-star">⭐</div>

</div>

<h2 id="turnText">
Current Turn: ${playerColors[currentTurn]}
</h2>

<h2 id="diceValue">🎲 1</h2>

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
}
