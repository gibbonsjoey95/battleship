import Player from './player';
import Ship from './ship';
import renderGrid from './render-grid';
import resetGame from './reset-game';

const player1Gameboard = document.querySelector('#player1Gameboard');
const player2Gameboard = document.querySelector('#player2Gameboard');

let player;
let opponent;

const ships = [1, 2, 3, 4, 5];
let placingShips = true;

const playerState = {
  ships: ships,
  currentShipIndex: 0,
  currentShipLength: ships[0],
  placingShips: placingShips,
  orientation: 'horizontal',
};

const opponentState = {
  ships: ships,
  currentShipIndex: 0,
  currentShipLength: ships[0],
  placingShips: placingShips,
  orientation: 'horizontal',
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'r' || event.key === 'R') {
    playerState.orientation =
      playerState.orientation === 'horizontal' ? 'vertical' : 'horizontal';
  }
});

const startNewGame = () => {
  player = new Player('real');
  opponent = new Player('computer');

  // const ship2 = new Ship(3);
  // console.log(ship2);

  playerState.currentShipIndex = 0;
  playerState.currentShipLength =
    playerState.ships[playerState.currentShipIndex];
  playerState.placingShips = true;
  playerState.orientation = 'horizontal';

  opponentState.currentShipIndex = 0;
  opponentState.currentShipLength =
    opponentState.ships[opponentState.currentShipIndex];
  opponentState.placingShips = true;
  opponentState.orientation = 'horizontal';

  player.gameboard.reset();
  opponent.gameboard.reset();

  // opponent.gameboard.placeShip(ship2, 0, 0, 'vertical');

  renderGrid(
    player.gameboard,
    player,
    opponent,
    player1Gameboard,
    false,
    playerState,
    opponentState,
  );
  renderGrid(
    opponent.gameboard,
    player,
    opponent,
    player2Gameboard,
    true,
    playerState,
    opponentState,
  );
};

export default startNewGame;
