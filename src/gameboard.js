import Ship from './ship';

class Gameboard {
  constructor() {
    this.grid = this.createGrid();
    this.ships = [];
  }

  createGrid(size = 10) {
    return Array.from({ length: size }, () => Array(size).fill(null));
  }

  placeShip(ship, x, y, direction) {
    if (direction == 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y + i] = ship;
      }
    } else if (direction == 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x + i][y] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(x, y) {
    const cell = this.grid[x][y];
    if (cell && cell !== 'hit' && cell !== 'miss') {
      cell.hit();
      this.grid[x][y] = 'hit';
    } else {
      this.grid[x][y] = 'miss';
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  reset() {
    this.grid = this.createGrid(this.size);
  }

  validateShipPlacement(ship, x, y, orientation) {
    if (orientation === 'horizontal') {
      if (ship.length + y > this.grid[0].length) {
        return false;
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x][y + i] !== null) {
          return false;
        }
      }
    } else if (orientation === 'vertical') {
      if (ship.length + x > this.grid[0].length) {
        return false;
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x + i][y] !== null) {
          return false;
        }
      }
    }

    return true;
  }
}

export default Gameboard;
