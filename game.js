const players = ['O', 'X']

let playerNumber = 1
let gameData = [['-','-','-'],['-','-','-'],['-','-','-']]

function onClick (motion,x,y) {
  position(players,x,y)
  motion.value = players[playerNumber]
  playerNumber === 1 ? playerNumber-- : playerNumber++
  motion.disabled = 'true'
}

function position(players,x,y) {
  gameData[x][y] = players[playerNumber]
  console.log(gameData)
}
