const gameBoard = document.getElementById('board')
let playerNumber = 1
const players = ['O', 'X']
let resultValues = []
const comb = [[0, 1, 2], [0, 4, 8], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7]] // winning combination
let counter = 0
function checkWin (value) { // Check if game is over(Win/Loose)
  let streak, i, j
  let Draw = true
  for (i = 0; i < comb.length; i++) {
    streak = comb[i]
    for (j = 0; j < comb.length; j++) {
      if (resultValues[streak[j]] !== value)
        break
        Draw === true
    }
    if (j === 3) {
      return true
      Draw === false
    }
  }
  if (counter === 9 && Draw === true) {
    alert('OMG: It is DRAW!')
    reset()
  }
}
function reset () { // reset gameBoard
  let i
  const inputs = gameBoard.getElementsByTagName('input')
  for (i = 0; i < inputs.length; i++) {
    inputs[i].disabled = inputs[i].value = ''
    counter = 0
    playerNumber = 1
  }
}
function showMove () {
  alert(' Next move is : ' + players[playerNumber])
  resultValues = []
}
function Winner () { // check who win
  let i
  const inputs = gameBoard.getElementsByTagName('input')
  for (i = 0; i < inputs.length; i++) {
    resultValues[i] = inputs[i].value // check which value on the game board
  }
  for (i = 0; i < players.length; i++) {
    if (checkWin(players[i])) {
      alert('In this battle winner is: ' + players[i] + '   :3')
      reset()
      return
    }
  }
}
function onClick (motion) {    // X or O on the board
  motion.value = players[playerNumber]

  playerNumber === 1 ? playerNumber-- : playerNumber++
  document.getElementById('moveButton').value = players[playerNumber]
  motion.disabled = 'true'
  counter++
  Winner()
}
