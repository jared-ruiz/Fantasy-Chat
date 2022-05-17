
var rollParam = document.getElementById('roll-input');
const rollButton = document.getElementById('rollButton');
const rollOutput = document.getElementById('rollOutput');

function rollDie(){
    var rollValue = rollParam.value
    DiceRoll(rollValue);
    console.log(roll.total);
    var rollOutcome = roll.total
    rollOutput.innerText(rollOutcome);

}

rollButton.addEventListener("click", rollDie);

