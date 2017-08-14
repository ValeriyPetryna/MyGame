const players = ['O', 'X']
const gameBoard = document.getElementById('board')
const inputs = gameBoard.getElementsByTagName('input')

let playerNumber = 1
let gameData = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]

function onClick (motion, x, y) {
  position(players, x, y)
  motion.value = players[playerNumber]
  playerNumber === 1 ? playerNumber-- : playerNumber++
  motion.disabled = 'true'
}

function position (players, x, y) {
  gameData[x][y] = players[playerNumber]
  console.log(gameData)
}

function reset () {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = inputs[i].value = ''
  }
  playerNumber = 1
  gameData = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
}
