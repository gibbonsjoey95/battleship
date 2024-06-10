let shipsLeft = 5;

const updatePlayerGameboard = (player, player1ShipsRemaining) => {
  player.gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = player1Gameboard.querySelector(
        `[data-row='${rowIndex}'][data-cell='${cellIndex}']`,
      );

      if (cell === 'hit') {
        gridSquare.classList.add('hit-ship');
        gridSquare.classList.remove('ship');
        let shipCounter = 5;
        let result = player.gameboard.ships;
        result.forEach((ship) => {
          if (ship.sunk) {
            shipCounter--;
            shipsLeft = shipCounter;
          }
        });
        player1ShipsRemaining.textContent = `Ships Remaining: ${shipsLeft}`;
      } else if (cell === 'miss') {
        gridSquare.classList.add('miss');
      }
    });
  });
};

export default updatePlayerGameboard;
