
var rollParam = document.getElementById('roll-input');
var dieParam = document.getElementById('die-amount');
const rollButton = document.getElementById('rollButton');
const rollOutput = document.getElementById('rollOutput');


var dice = {
    sides: rollParam.value,
    roll: function () {
      
    }
  }
  
  
  rollButton.onclick = function() {

        let sides = rollParam.value;
        let die = dieParam.value;
        var randomNumber = Math.floor(Math.random() * sides * die) + 1;
        rollOutput.innerText = randomNumber
    }