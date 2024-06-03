import updatePlayerGameboard from './update-player-gameboard';

const handlePlayerTurn = (
  player,
  opponent,
  rowIndex,
  cellIndex,
  gridSquare,
) => {
  const square = opponent.gameboard.grid[rowIndex][cellIndex];
  if (square === 'hit' || square === 'miss') {
    alert('choose another square');
  } else {
    player.takeTurn(opponent, rowIndex, cellIndex);
    const updatedSquare = opponent.gameboard.grid[rowIndex][cellIndex];

    if (updatedSquare === 'hit') {
      gridSquare.classList.add('hit');
    } else if (updatedSquare === 'miss') {
      gridSquare.classList.add('miss');
    }

    opponent.takeTurn(player, 0, 0);
    updatePlayerGameboard(player);
  }
};

export default handlePlayerTurn;
