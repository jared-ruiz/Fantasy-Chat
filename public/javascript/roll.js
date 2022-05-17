
var rollParam = document.getElementById('roll-input');
const rollButton = document.getElementById('rollButton');
const rollOutput = document.getElementById('rollOutput');


var dice = {
    sides: rollParam.value,
    roll: function () {
      
    }
  }
  
  
  rollButton.onclick = function() {

        let sides = rollParam.value;
        var randomNumber = Math.floor(Math.random() * sides) + 1;
        rollOutput.innerText = randomNumber
    }