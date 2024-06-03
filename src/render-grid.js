import handlePlayerTurn from './handle-player-turn';

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
          handlePlayerTurn(player, opponent, rowIndex, cellIndex, gridSquare);
        });
      }

      container.appendChild(gridSquare);
    });
  });
};

export default renderGrid;
