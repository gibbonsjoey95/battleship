import startNewGame from './start-new-game';

const endGameMessage = document.querySelector('#endGameMessage');
const winnerMessage = document.querySelector('#winnerMessage');
const startGameBtn = document.querySelector('#startGameBtn');

const checkEndGame = (player, opponent) => {
  if (player.gameboard.allShipsSunk()) {
    setTimeout(() => {
      endGameMessage.classList.remove('hidden');
      winnerMessage.textContent = 'Opponent Won';
      startGameBtn.addEventListener('click', () => {
        startNewGame(player, opponent);
        endGameMessage.classList.add('hidden');
      });
    }, 100);
  } else if (opponent.gameboard.allShipsSunk()) {
    setTimeout(() => {
      endGameMessage.classList.remove('hidden');
      winnerMessage.textContent = 'You Won!!';
      startGameBtn.addEventListener('click', () => {
        startNewGame(player, opponent);
        endGameMessage.classList.add('hidden');
      });
    }, 100);
  }
};

export default checkEndGame;
