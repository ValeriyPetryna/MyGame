    var gameBoard = document.getElementById('board'), playerNumber = 1, players = ['O','X'], resultValues = [];
comb = [[0, 1, 2], [0, 4, 8], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7]]; //winning combination

function checkWin(value) //Check if game is over(Win/Loose)
{ 
var strick, i, j;
    for (i=0;i<comb.length;i++) 
    { 
    strick=comb[i];
        for(j=0; j<comb.length;j++)
        {
            if(resultValues[strick[j]]!=value)
                break;
         }
         if (j==3) return true;    // strick of X-X-X or O-O-O   
      }
    return false;
}

function Winner() // check who win
{
  var i, inputs = gameBoard.getElementsByTagName('input');     
      for (i = 0; i < inputs.length; i++)
      {
        resultValues[i] = inputs[i].value;// check which value on the game board
      }
       
      for (i = 0; i < players.length; i++) 
      {
        if (checkWin(players[i])) 
        {
          alert('In this battle winner is: '+ players[i] + '   :3');
          reset();
          return;
        }
      }
    }

 function onClick(motion)    // X or O on the board
{   
      motion.value = players[playerNumber];
      playerNumber == 1 ? playerNumber-- : playerNumber++;
   motion.disabled = "true";
 }

function reset() { // reset gameBoard
      var i, inputs = gameBoard.getElementsByTagName('input');
      for (i = 0; i < inputs.length; i++) {
        inputs[i].disabled = inputs[i].value = '';
      }
    }
//допилю еще на ничью
