const resetGame = (player, opponent, player1Gameboard, orientation) => {
  currentShipIndex = 0;
  currentShipLength = ships[currentShipIndex];
  placingShips = true;
  orientation = 'horizontal';

  player.gameboard.reset();
  opponent.gameboard.reset();

  renderGrid(player.gameboard, player, opponent, player1Gameboard, false);
  renderGrid(opponent.gameboard, player, opponent, player2Gameboard, true);
};

export default resetGame;
