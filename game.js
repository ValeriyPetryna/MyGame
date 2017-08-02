const gameBoard = document.getElementById('board')
let playerNumber = 1
const players = ['O', 'X']
let resultValues = []
const comb = [[0, 1, 2], [0, 4, 8], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7]] // winning combination
let counter = 0
document.getElementById('move').value = "Next turn is: X !"

function checkWin (value) { // Check if game is over(Win/Loose)
  let  i, j
var streak = comb.map(function(value,index,comb){
  // need paste streak=comb[i] but i idk how
comb.forEach(function(ittem,j,comb) { // ?!
    
      if (resultValues[streak[j]] !== value)
        break 
    })
    if (j === 3) {
      return true
    }
})
  return false
}

function reset () { // reset gameBoard
  let i
  const inputs = gameBoard.getElementsByTagName('input')
  for (i = 0; i < inputs.length; i++) {
    inputs[i].disabled = inputs[i].value = ''
    counter = 0
    playerNumber = 1
    document.getElementById('move').value = "Next turn is: X !"
  }
}

function Winner () { // check who win
  let i
  const inputs = gameBoard.getElementsByTagName('input')
  inputs.forEach(function(elem,i,inputs) {
    // resultValues[i] = inputs[i].value 
  })
  players.forEach(function (item, i, players) {
    if (checkWin(players[i])) {
      alert('In this battle winner is: ' + item + '   :3')
      reset()
      return
    }
  })
  if (checkWin() === false && counter === 9) {
    alert('OMG: It is DRAW!')
    reset()
  }
}

function onClick (motion) {    // X or O on the board
  motion.value = players[playerNumber]
  playerNumber === 1 ? playerNumber-- : playerNumber++
  document.getElementById('move').value = 'Next turn is:' + players[playerNumber] + '!'
  motion.disabled = 'true'
  counter++
  Winner()
}
