const gameBoard = document.getElementById('board')
const inputs = gameBoard.getElementsByTagName('input')
const moveButton = document.getElementById('move')

const players = ['O', 'X']
const comb = [[0, 1, 2], [0, 4, 8], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7]] // winning combination

let playerNumber = 1
let resultValues = []
let counter = 0

moveButton.value = "Next turn is: X "

function checkWin (value) { // Check if game is over(Win/Loose)
  let streak, i, j
  for (i in comb) {
    streak = comb[i]
    for (j = 0; j < comb.length; j++) {
      if (resultValues[streak[j]] !== value)
        break
    }
    if (j === 3) {
      return true
    }
  }
  return false
}

function reset () { // reset gameBoard
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = inputs[i].value = ''
    counter = 0
    playerNumber = 1
  }
}

function Winner () { // check who win
  let i
  for (i = 0; i < inputs.length; i++) {
    resultValues[i] = inputs[i].value // check which value on the game board
  }
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
  moveButton.value = 'Next turn is: ' + players[playerNumber]
  motion.disabled = 'true'
  counter++
  Winner()
}
