import Ship from './ship';
import Player from './player';

const player1Gameboard = document.querySelector('#player1Gameboard');
const player2Gameboard = document.querySelector('#player2Gameboard');

const renderGrid = (player, opponent) => {
  player.gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridSquare.textContent = '';
      gridSquare.dataset.row = rowIndex;
      gridSquare.dataset.cell = cellIndex;

      player1Gameboard.appendChild(gridSquare);
    });
  });

  opponent.gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridSquare.textContent = '';
      gridSquare.dataset.row = rowIndex;
      gridSquare.dataset.cell = cellIndex;

      gridSquare.addEventListener('click', () => {
        if (
          opponent.gameboard.grid[rowIndex][cellIndex] === 'hit' ||
          opponent.gameboard.grid[rowIndex][cellIndex] === 'miss'
        ) {
          alert('choose another');
        } else {
          player.takeTurn(opponent, rowIndex, cellIndex);

          if (opponent.gameboard.grid[rowIndex][cellIndex] === 'hit') {
            gridSquare.classList.add('hit');
          } else if (opponent.gameboard.grid[rowIndex][cellIndex] === 'miss') {
            gridSquare.classList.add('miss');
          }

          opponent.takeTurn(player, 0, 0);
          updatePlayerGameboard(player);
        }
      });

      player2Gameboard.appendChild(gridSquare);
    });
  });
};

const updatePlayerGameboard = (player) => {
  player.gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = player1Gameboard.querySelector(
        `[data-row='${rowIndex}'][data-cell='${cellIndex}']`,
      );

      if (cell === 'hit') {
        gridSquare.classList.add('hit');
      } else if (cell === 'miss') {
        gridSquare.classList.add('miss');
      }
    });
  });
};

const gameController = () => {
  const player = new Player('real');
  const opponent = new Player('computer');

  const ship1 = new Ship(3);
  const ship2 = new Ship(3);

  player.gameboard.placeShip(ship1, 0, 0, 'horizontal');
  opponent.gameboard.placeShip(ship2, 0, 0, 'vertical');

  renderGrid(player, opponent);
};

export default gameController;
