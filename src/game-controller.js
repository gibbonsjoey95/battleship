import Ship from './ship';
import Player from './player';
import renderGrid from './render-grid';

const player1Gameboard = document.querySelector('#player1Gameboard');
const player2Gameboard = document.querySelector('#player2Gameboard');

const player = new Player('real');
const opponent = new Player('computer');
const ship1 = new Ship(3);
const ship2 = new Ship(3);

player.gameboard.placeShip(ship1, 0, 0, 'horizontal');
opponent.gameboard.placeShip(ship2, 0, 0, 'vertical');

const gameController = () => {
  renderGrid(player.gameboard, player, opponent, player1Gameboard);
  renderGrid(opponent.gameboard, player, opponent, player2Gameboard, true);
};

export default gameController;
