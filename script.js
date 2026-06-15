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
<div class="menu-screen">

<h1>LUDO BOARD</h1>

<p>Board Coming Soon</p>

<button class="menu-btn" onclick="showMenu()">
Main Menu
</button>

</div>
`;
}
