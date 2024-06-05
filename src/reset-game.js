const resetGame = (
  player,
  opponent,
  player1Gameboard,
  currentShipIndex,
  orientation,
) => {
  currentShipIndex = 0;
  currentShipLength = ships[currentShipIndex];
  placingShips = true;
  orientation = 'horizontal';

  player.gameboard.reset();
  opponent.gameboard.reset();

  renderGrid(
    player.gameboard,
    player,
    opponent,
    player1Gameboard,
    false,
    ships,
    currentShipIndex,
    currentShipLength,
    placingShips,
    orientation,
  );
  renderGrid(
    opponent.gameboard,
    player,
    opponent,
    player2Gameboard,
    true,
    ships,
    currentShipIndex,
    currentShipLength,
    placingShips,
    orientation,
  );
};

export default resetGame;
