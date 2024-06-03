import Player from './player';
import Ship from './ship';
import renderGrid from './render-grid';

const player1Gameboard = document.querySelector('#player1Gameboard');
const player2Gameboard = document.querySelector('#player2Gameboard');

let player;
let opponent;

const startNewGame = () => {
  player = new Player('real');
  opponent = new Player('computer');
  const ship1 = new Ship(3);
  const ship2 = new Ship(3);

  player.gameboard.placeShip(ship1, 0, 0, 'horizontal');
  opponent.gameboard.placeShip(ship2, 0, 0, 'vertical');

  renderGrid(player.gameboard, player, opponent, player1Gameboard);
  renderGrid(opponent.gameboard, player, opponent, player2Gameboard, true);
};

export default startNewGame;
