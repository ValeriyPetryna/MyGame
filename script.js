    var gameBoard = document.getElementById('board'), playerNumber = 1, players = ['O','X'], resultValues = [];

 function onClick(motion) {      
      motion.value = players[playerNumber];
      playerNumber == 1 ? playerNumber-- : playerNumber++;
   motion.disabled = "true";
 }

function reset() {
      var i, inputs = gameBoard.getElementsByTagName('input');
      for (i = 0; i < inputs.length; i++) {
        inputs[i].disabled = inputs[i].value = '';
      }
    }
