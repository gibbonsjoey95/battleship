import './styles.css';
import Ship from './ship.js';

function component() {
  const element = document.createElement('div');

  let ship = new Ship(3);

  console.log('ship', ship);
  ship.hit();
  console.log('2', ship);
  return element;
}

document.body.appendChild(component());
