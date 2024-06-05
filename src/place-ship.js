const placeShip = (gameboard, ship, row, col, orientation) => {
  if (gameboard.validateShipPlacement(ship, row, col, orientation)) {
    gameboard.placeShip(ship, row, col, orientation);
    return true;
  }
  return false;
};

export default placeShip;
