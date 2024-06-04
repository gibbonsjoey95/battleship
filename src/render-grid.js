import checkEndGame from './check-end-game';
import handlePlayerTurn from './handle-player-turn';
import Ship from './ship';

const ships = [2, 3];
let currentShipIndex = 0;
let currentShipLength = ships[currentShipIndex];
let placingShips = true;
let orientation = 'horizontal';

const changeOrientation = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
      orientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';
    }
  });
};

const placeShip = (gameboard, ship, row, col, orientation) => {
  if (validateShipPlacement(gameboard, row, col, ship.length, orientation)) {
    gameboard.placeShip(ship, row, col, orientation);
    return true;
  }
  return false;
};

const validateShipPlacement = (gameboard, row, col, length, orientation) => {
  if (orientation === 'horizontal') {
    if (col + length > gameboard.grid[0].length) return false;
    for (let i = col; i < col + length; i++) {
      if (gameboard.grid[row][i] !== null) return false;
    }
  } else {
    if (row + length > gameboard.grid.length) return false;
    for (let i = row; i < row + length; i++) {
      if (gameboard.grid[i][col] !== null) return false;
    }
  }
  return true;
};

changeOrientation();

const renderGrid = (
  gameboard,
  player,
  opponent,
  container,
  isOpponent = false,
) => {
  container.textContent = '';
  gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridSquare.textContent = '';
      gridSquare.dataset.row = rowIndex;
      gridSquare.dataset.cell = cellIndex;

      if (isOpponent == false && cell instanceof Ship) {
        gridSquare.classList.add('ship');
      }

      if (isOpponent) {
        gridSquare.addEventListener('click', () => {
          handlePlayerTurn(player, opponent, rowIndex, cellIndex, gridSquare);
          checkEndGame(player, opponent);
        });
      } else {
        gridSquare.addEventListener('click', () => {
          console.log(player.gameboard);
          if (placingShips) {
            let currentShip = new Ship(currentShipLength);
            const placed = placeShip(
              player.gameboard,
              currentShip,
              rowIndex,
              cellIndex,
              orientation,
            );
            if (placed) {
              renderGrid(player.gameboard, player, opponent, container, false);
              currentShipIndex++;
              if (currentShipIndex >= ships.length) {
                placingShips = false;
              } else {
                currentShipLength = ships[currentShipIndex];
              }
            } else {
              alert('Invalid ship placement');
            }
          }
        });
      }

      container.appendChild(gridSquare);
    });
  });
};

export default renderGrid;
