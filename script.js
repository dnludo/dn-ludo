const board = document.getElementById("board");

for(let i=0;i<225;i++){
    const cell=document.createElement("div");
    cell.classList.add("cell");

    if(i<30) cell.classList.add("red");
    else if(i<60) cell.classList.add("green");
    else if(i<90) cell.classList.add("yellow");
    else if(i<120) cell.classList.add("blue");

    board.appendChild(cell);
}

let currentPlayer=0;
const players=["Red","Green","Yellow","Blue"];

function rollDice(){

    let num=Math.floor(Math.random()*6)+1;

    document.getElementById("dice").innerHTML=num;

    document.getElementById("status").innerHTML=
    players[currentPlayer]+" rolled "+num;

    if(num!==6){
        currentPlayer=(currentPlayer+1)%4;
    }

    document.getElementById("turn").innerHTML=
    players[currentPlayer]+" Turn";
}
