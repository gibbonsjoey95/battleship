import Player from './player';
import Ship from './ship';
import renderGrid from './render-grid';
import resetGame from './reset-game';

const player1Gameboard = document.querySelector('#player1Gameboard');
const player2Gameboard = document.querySelector('#player2Gameboard');
const player1ShipsRemaining = document.querySelector('#player1ShipsRemaining');
const player2ShipsRemaining = document.querySelector('#player2ShipsRemaining');

let player;
let opponent;
player1ShipsRemaining.textContent = `Ships Remaining: ${5}`;
player2ShipsRemaining.textContent = `Ships Remaining: ${5}`;

const ships = [
  { name: 'Patrol', length: 1 },
  { name: 'Destroyer', length: 2 },
  { name: 'Submarine', length: 3 },
  { name: 'Battleship', length: 4 },
  { name: 'Aircraft Carrier', length: 5 },
];

let placingShips = true;

const playerState = {
  ships: ships,
  currentShipIndex: 0,
  currentShip: ships[0].length,
  placingShips: placingShips,
  orientation: 'horizontal',
};

const opponentState = {
  ships: ships,
  currentShipIndex: 0,
  currentShip: ships[0].length,
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

  playerState.currentShipIndex = 0;
  playerState.currentShip = playerState.ships[playerState.currentShipIndex];
  playerState.placingShips = true;
  playerState.orientation = 'horizontal';

  opponentState.currentShipIndex = 0;
  opponentState.currentShip =
    opponentState.ships[opponentState.currentShipIndex];
  opponentState.placingShips = true;
  opponentState.orientation = 'horizontal';

  player1ShipsRemaining.textContent = `Ships Remaining: ${5}`;
  player2ShipsRemaining.textContent = `Ships Remaining: ${5}`;
  player.gameboard.reset();
  opponent.gameboard.reset();

  renderGrid(
    player.gameboard,
    player,
    opponent,
    player1Gameboard,
    false,
    playerState,
    opponentState,
    player1ShipsRemaining,
    player2ShipsRemaining,
  );
  renderGrid(
    opponent.gameboard,
    player,
    opponent,
    player2Gameboard,
    true,
    playerState,
    opponentState,
    player1ShipsRemaining,
    player2ShipsRemaining,
  );
};

export default startNewGame;
