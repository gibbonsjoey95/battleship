import updatePlayerGameboard from './update-player-gameboard';

const renderGrid = (
  gameboard,
  player,
  opponent,
  container,
  isOpponent = false,
) => {
  gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridSquare.textContent = '';
      gridSquare.dataset.row = rowIndex;
      gridSquare.dataset.cell = cellIndex;

      if (isOpponent) {
        gridSquare.addEventListener('click', () => {
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
        });
      }

      container.appendChild(gridSquare);
    });
  });
};

export default renderGrid;
