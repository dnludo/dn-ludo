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
.addEventListener("click",function(){

});

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
.getElementById("playBtn")
.addEventListener("click", showMenu);
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
