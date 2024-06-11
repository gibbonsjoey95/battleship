import updatePlayerGameboard from './update-player-gameboard';

let shipsLeft = 5;

const handlePlayerTurn = (
  player,
  opponent,
  rowIndex,
  cellIndex,
  gridSquare,
  player1ShipsRemaining,
  player2ShipsRemaining,
) => {
  const square = opponent.gameboard.grid[rowIndex][cellIndex];
  if (square === 'hit' || square === 'miss') {
    const makeAnotherAttackMessage = document.querySelector(
      '#makeAnotherAttackMessage',
    );
    makeAnotherAttackMessage.classList.remove('hidden');
    setTimeout(() => {
      makeAnotherAttackMessage.classList.add('hidden');
    }, 2000);
  } else {
    player.takeTurn(opponent, rowIndex, cellIndex);
    const updatedSquare = opponent.gameboard.grid[rowIndex][cellIndex];

    if (updatedSquare === 'hit') {
      gridSquare.classList.add('hit');
      let shipCounter = 5;
      let result = opponent.gameboard.ships;
      result.forEach((ship) => {
        if (ship.sunk) {
          shipCounter--;
          shipsLeft = shipCounter;
        }
      });
      player2ShipsRemaining.textContent = `Ships Remaining: ${shipsLeft}`;
    } else if (updatedSquare === 'miss') {
      gridSquare.classList.add('miss');
    }

    opponent.takeTurn(player, 0, 0);
    updatePlayerGameboard(player, player1ShipsRemaining);
  }
};

export default handlePlayerTurn;
