import validateShipPlacement from './validate-ship-placement';

const placeShip = (gameboard, ship, row, col, orientation) => {
  if (validateShipPlacement(gameboard, row, col, ship.length, orientation)) {
    gameboard.placeShip(ship, row, col, orientation);
    return true;
  }
  return false;
};

export default placeShip;
