const updatePlayerGameboard = (player) => {
  player.gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = player1Gameboard.querySelector(
        `[data-row='${rowIndex}'][data-cell='${cellIndex}']`,
      );

      if (cell === 'hit') {
        gridSquare.classList.add('hit-ship');
        gridSquare.classList.remove('ship');
      } else if (cell === 'miss') {
        gridSquare.classList.add('miss');
      }
    });
  });
};

export default updatePlayerGameboard;
