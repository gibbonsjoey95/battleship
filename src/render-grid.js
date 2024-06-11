import checkEndGame from './check-end-game';
import handlePlayerTurn from './handle-player-turn';
import Ship from './ship';
import placeShip from './place-ship';
import createGridSquare from './create-grid-square';
import highlightShipPlacement from './highlight-ship-placement';

const mouseOverSquareHandler = (playerState, rowIndex, cellIndex) => {
  if (playerState.placingShips) {
    highlightShipPlacement(playerState, rowIndex, cellIndex, true);
  }
};

const mouseOutSquareHandler = (playerState, rowIndex, cellIndex) => {
  if (playerState.placingShips) {
    highlightShipPlacement(playerState, rowIndex, cellIndex, false);
  }
};

const renderGrid = (
  gameboard,
  player,
  opponent,
  container,
  isOpponent,
  playerState,
  opponentState,
  player1ShipsRemaining,
  player2ShipsRemaining,
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
        gridSquare.addEventListener('mouseover', () => {
          mouseOverSquareHandler(playerState, rowIndex, cellIndex);
        });

        gridSquare.addEventListener('mouseout', () => {
          mouseOutSquareHandler(playerState, rowIndex, cellIndex);
        });

        gridSquare.addEventListener('click', () => {
          if (playerState.placingShips) {
            let playerShip = new Ship(
              playerState.currentShip.length,
              playerState.currentShip.name,
            );
            let opponentShip = new Ship(
              opponentState.currentShip.length,
              opponentState.currentShip.name,
            );
            let randX, randY, randOrientation, placedOpponenet;

            const placedPlayer = placeShip(
              player.gameboard,
              playerShip,
              rowIndex,
              cellIndex,
              playerState.orientation,
            );

            if (placedPlayer) {
              for (let attempts = 0; attempts < 100; attempts++) {
                randX = Math.floor(Math.random() * 10);
                randY = Math.floor(Math.random() * 10);
                randOrientation =
                  Math.floor(Math.random() * 10) > 5
                    ? (opponentState.orientation = 'vertical')
                    : (opponentState.orientation = 'horizontal');
                placedOpponenet = placeShip(
                  opponent.gameboard,
                  opponentShip,
                  randX,
                  randY,
                  opponentState.orientation,
                );
                if (placedOpponenet) break;
              }
            }

            if (placedOpponenet) {
              renderGrid(
                player.gameboard,
                player,
                opponent,
                container,
                false,
                playerState,
                opponentState,
                player1ShipsRemaining,
                player2ShipsRemaining,
              );
              playerState.currentShipIndex++;
              opponentState.currentShipIndex++;
              if (playerState.currentShipIndex >= playerState.ships.length) {
                playerState.placingShips = false;
              } else {
                playerState.currentShip =
                  playerState.ships[playerState.currentShipIndex];
                opponentState.currentShip =
                  opponentState.ships[opponentState.currentShipIndex];
              }
            } else {
              const invalidShipPlacementMessage = document.querySelector(
                '#invalidShipPlacementMessage',
              );
              invalidShipPlacementMessage.classList.remove('hidden');
              setTimeout(() => {
                invalidShipPlacementMessage.classList.add('hidden');
              }, 2000);
            }
          }
        });
      } else {
        gridSquare.addEventListener('click', () => {
          if (!playerState.placingShips) {
            handlePlayerTurn(
              player,
              opponent,
              rowIndex,
              cellIndex,
              gridSquare,
              player1ShipsRemaining,
              player2ShipsRemaining,
            );
            if (checkEndGame(player, opponent)) {
              resetGame();
            }
          } else {
            const finishPlacingAllShipsMessage = document.querySelector(
              '#finishPlacingAllShipsMessage',
            );
            finishPlacingAllShipsMessage.classList.remove('hidden');
            setTimeout(() => {
              finishPlacingAllShipsMessage.classList.add('hidden');
            }, 2000);
          }
        });
      }

      container.appendChild(gridSquare);
    });
  });
};

export default renderGrid;
