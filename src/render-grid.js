import checkEndGame from './check-end-game';
import handlePlayerTurn from './handle-player-turn';
import Ship from './ship';
import placeShip from './place-ship';

const ships = [2, 3];
let currentShipIndex = 0;
let currentShipLength = ships[currentShipIndex];
let placingShips = true;
let orientation = 'horizontal';

document.addEventListener('keydown', (event) => {
  if (event.key === 'r' || event.key === 'R') {
    orientation = orientation === 'horizontal' ? 'vertical' : 'horizontalr';
  }
});

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
      if (!isOpponent) {
        gridSquare.addEventListener('click', () => {
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
      if (isOpponent) {
        console.log('1');
        gridSquare.addEventListener('click', () => {
          if (!placingShips) {
            handlePlayerTurn(player, opponent, rowIndex, cellIndex, gridSquare);
            checkEndGame(player, opponent);
          } else {
            alert('Finish placing all ships');
          }
        });
      }

      container.appendChild(gridSquare);
    });
  });
};

export default renderGrid;
