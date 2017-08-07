const players = ['O', 'X']

let playerNumber = 1
let gameData = [['-','-','-'],['-','-','-'],['-','-','-']]

function onClick (motion,row,col) { // X or O on the board

  motion.value = players[playerNumber]
  gameData[row][col] = players[playerNumber]
  console.log(gameData)
  playerNumber === 1 ? playerNumber-- : playerNumber++
  motion.disabled = 'true'
}
