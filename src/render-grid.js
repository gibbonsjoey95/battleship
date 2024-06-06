import checkEndGame from './check-end-game';
import handlePlayerTurn from './handle-player-turn';
import Ship from './ship';
import placeShip from './place-ship';
import createGridSquare from './create-grid-square';

const renderGrid = (
  gameboard,
  player,
  opponent,
  container,
  isOpponent,
  playerState,
  opponentState,
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
          if (playerState.placingShips) {
            let playerShip = new Ship(playerState.currentShipLength);
            let opponentShip = new Ship(opponentState.currentShipLength);
            let randX, randY, randOrientation, placedOpponenet;

            const placedPlayer = placeShip(
              player.gameboard,
              playerShip,
              rowIndex,
              cellIndex,
              playerState.orientation,
            );

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

            if (placedPlayer && placedOpponenet) {
              // if (placedPlayer) {
              renderGrid(
                player.gameboard,
                player,
                opponent,
                container,
                false,
                playerState,
                opponentState,
              );
              playerState.currentShipIndex++;
              opponentState.currentShipIndex++;
              if (playerState.currentShipIndex >= playerState.ships.length) {
                playerState.placingShips = false;
              } else {
                playerState.currentShipLength =
                  playerState.ships[playerState.currentShipIndex];
                opponentState.currentShipLength =
                  opponentState.ships[opponentState.currentShipIndex];
              }
              console.log(player.gameboard);
              console.log(opponent.gameboard);
            } else {
              alert('Invalid ship placement');
            }
          }
        });
      } else {
        gridSquare.addEventListener('click', () => {
          if (!playerState.placingShips) {
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
