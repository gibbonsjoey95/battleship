import './styles.css';
import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';

const player1Gameboard = document.querySelector('#player1Gameboard');
const player2Gameboard = document.querySelector('#player2Gameboard');

function component() {
  const player = new Player('real');
  const opponent = new Player('computer');

  const ship1 = new Ship(3);
  const ship2 = new Ship(3);

  player.gameboard.placeShip(ship1, 0, 0, 'horizontal');
  opponent.gameboard.placeShip(ship2, 0, 0, 'vertical');

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
        player.takeTurn(opponent, rowIndex, cellIndex);
        opponent.takeTurn(player, 0, 0);

        if (opponent.gameboard.grid[rowIndex][cellIndex] === 'hit') {
          gridSquare.classList.add('hit');
        } else if (opponent.gameboard.grid[rowIndex][cellIndex] === 'miss') {
          gridSquare.classList.add('miss');
        }

        console.log(
          `clicked ${rowIndex},${cellIndex}`,
          opponent.gameboard.grid[rowIndex][cellIndex],
        );
      });

      player2Gameboard.appendChild(gridSquare);
    });
  });
}

// document.body.appendChild(component());
component();
