import Player from './player';
import Ship from './ship';
import renderGrid from './render-grid';
import resetGame from './reset-game';

const player1Gameboard = document.querySelector('#player1Gameboard');
const player2Gameboard = document.querySelector('#player2Gameboard');

let player;
let opponent;

const ships = [2, 3];
let placingShips = true;

const state = {
  ships: ships,
  currentShipIndex: 0,
  currentShipLength: ships[0],
  placingShips: placingShips,
  orientation: 'horizontal',
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'r' || event.key === 'R') {
    orientation = orientation === 'horizontal' ? 'vertical' : 'horizontalr';
  }
});

const startNewGame = () => {
  player = new Player('real');
  opponent = new Player('computer');

  const ship2 = new Ship(3);
  // console.log(ship2);

  state.currentShipIndex = 0;
  state.currentShipLength = state.ships[state.currentShipIndex];
  state.placingShips = true;
  state.orientation = 'horizontal';

  player.gameboard.reset();
  opponent.gameboard.reset();

  opponent.gameboard.placeShip(ship2, 0, 0, 'vertical');

  renderGrid(
    player.gameboard,
    player,
    opponent,
    player1Gameboard,
    false,
    state,
  );
  renderGrid(
    opponent.gameboard,
    player,
    opponent,
    player2Gameboard,
    true,
    state,
  );
};

export default startNewGame;
