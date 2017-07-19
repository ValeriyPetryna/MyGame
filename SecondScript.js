const gameBoard = document.getElementById('board');
let playerNumber = 1;
const players = ['O','X']; 
let resultValues = [];
const comb = [[0, 1, 2], [0, 4, 8], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7]]; //winning combination

function checkWin(value) //Check if game is over(Win/Loose)
{ 
let streak;
let i;
let j;
    for (i=0;i<comb.length;i++) 
    { 
    streak=comb[i];
        for(j=0; j<comb.length;j++)
        {
            if(resultValues[streak[j]]!=value)
                break;
         }
        if (j==3) return true;    // streak of X-X-X or O-O-O   
      }
    return false;
}

function reset() { // reset gameBoard
    let i;
    const inputs = gameBoard.getElementsByTagName('input');
      for (i = 0; i < inputs.length; i++) {
        inputs[i].disabled = inputs[i].value = '';
      }
    }
function showMove() {
      alert('Next move is : '+ players[playerNumber]);
      resultValues = [];
    }

function Winner() // check who win
{
  let i;
  const inputs = gameBoard.getElementsByTagName('input');     
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
    Winner();
 }
