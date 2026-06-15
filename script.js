const diceBtn = document.getElementById("rollDice");
const diceValue = document.getElementById("diceValue");

diceBtn.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    diceValue.innerText = roll;
});
