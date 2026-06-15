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
    alert("DN Ludo Main Menu Coming Soon");
});

function showMenu() {
document.getElementById("app").innerHTML = `
<div class="menu-screen">
<h1>DN LUDO</h1>

<button class="menu-btn">Play Game</button>
<button class="menu-btn">Players</button>
<button class="menu-btn">Settings</button>
<button class="menu-btn">About</button>

</div>
`;
}

document
.getElementById("playBtn")
.addEventListener("click", showMenu);
