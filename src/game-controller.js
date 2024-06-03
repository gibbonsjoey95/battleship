import Ship from './ship';
import Player from './player';
import updatePlayerGameboard from './update-player-gameboard';

const player1Gameboard = document.querySelector('#player1Gameboard');
const player2Gameboard = document.querySelector('#player2Gameboard');

const player = new Player('real');
const opponent = new Player('computer');
const ship1 = new Ship(3);
const ship2 = new Ship(3);

player.gameboard.placeShip(ship1, 0, 0, 'horizontal');
opponent.gameboard.placeShip(ship2, 0, 0, 'vertical');

const renderGrid = (gameboard, container, isOpponent = false) => {
  gameboard.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridSquare.textContent = '';
      gridSquare.dataset.row = rowIndex;
      gridSquare.dataset.cell = cellIndex;

      if (isOpponent) {
        gridSquare.addEventListener('click', () => {
          const square = opponent.gameboard.grid[rowIndex][cellIndex];
          if (square === 'hit' || square === 'miss') {
            alert('choose another square');
          } else {
            player.takeTurn(opponent, rowIndex, cellIndex);
            const updatedSquare = opponent.gameboard.grid[rowIndex][cellIndex];

            if (updatedSquare === 'hit') {
              gridSquare.classList.add('hit');
            } else if (updatedSquare === 'miss') {
              gridSquare.classList.add('miss');
            }

            opponent.takeTurn(player, 0, 0);
            updatePlayerGameboard(player);
          }
        });
      }

      container.appendChild(gridSquare);
    });
  });
};

const gameController = () => {
  renderGrid(player.gameboard, player1Gameboard);
  renderGrid(opponent.gameboard, player2Gameboard, true);
};

export default gameController;
