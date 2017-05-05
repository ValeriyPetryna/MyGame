 var gameBoard = document.getElementById('board'), playerNumber = 1, players = ['O','X'], resultValues = [];        
 function onClick(motion) {      
      motion.value = players[playerNumber];
      playerNumber == 1 ? playerNumber-- : playerNumber++;
