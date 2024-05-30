import './styles.css';
import Ship from './ship';
import Gameboard from './gameboard';

function component() {
  const element = document.createElement('div');

  let ship = new Ship(3);
  let gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0, 'horizontal');

  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 3);

  console.log('gameboard', gameboard);

  return element;
}

document.body.appendChild(component());
