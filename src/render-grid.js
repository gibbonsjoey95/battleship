import checkEndGame from './check-end-game';
import handlePlayerTurn from './handle-player-turn';
import Ship from './ship';
import placeShip from './place-ship';
import createGridSquare from './create-grid-square';

// const ships = [2, 3];
// let currentShipIndex = 0;
// let currentShipLength = ships[currentShipIndex];
// let placingShips = true;
// let orientation = 'horizontal';

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'r' || event.key === 'R') {
//     orientation = orientation === 'horizontal' ? 'vertical' : 'horizontalr';
//   }
// });

const renderGrid = (
  gameboard,
  player,
  opponent,
  container,
  isOpponent,
  state,
) => {
  container.textContent = '';
  gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = createGridSquare(
        rowIndex,
        cellIndex,
        cell,
        isOpponent,
      );

      if (!isOpponent) {
        gridSquare.addEventListener('click', () => {
          console.log(state.placingShips);
          if (state.placingShips) {
            console.log(rowIndex, cellIndex);
            let currentShip = new Ship(state.currentShipLength);
            const placed = placeShip(
              player.gameboard,
              currentShip,
              rowIndex,
              cellIndex,
              state.orientation,
            );
            if (placed) {
              renderGrid(
                player.gameboard,
                player,
                opponent,
                container,
                false,
                state,
              );
              state.currentShipIndex++;
              if (state.currentShipIndex >= state.ships.length) {
                console.log('csi', state.currentShipIndex);
                state.placingShips = false;
              } else {
                state.currentShipLength = state.ships[state.currentShipIndex];
              }
            } else {
              alert('Invalid ship placement');
            }
          }
        });
      }
      if (isOpponent) {
        gridSquare.addEventListener('click', () => {
          if (!state.placingShips) {
            handlePlayerTurn(player, opponent, rowIndex, cellIndex, gridSquare);
            if (checkEndGame(player, opponent)) {
              resetGame();
            }
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
