import startNewGame from './start-new-game';

const checkEndGame = (player, opponent) => {
  if (player.gameboard.allShipsSunk()) {
    setTimeout(() => {
      alert('Opponent won');
      startNewGame(player, opponent);
    }, 100);
  } else if (opponent.gameboard.allShipsSunk()) {
    setTimeout(() => {
      alert('You won!');
      startNewGame(player, opponent);
    }, 100);
  }
};

export default checkEndGame;
