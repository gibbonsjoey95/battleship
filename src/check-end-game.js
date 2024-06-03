const checkEndGame = (player, opponent) => {
  if (player.gameboard.allShipsSunk()) {
    alert('Opponent won');
  } else if (opponent.gameboard.allShipsSunk()) {
    alert('You won!');
  }
};

export default checkEndGame;
