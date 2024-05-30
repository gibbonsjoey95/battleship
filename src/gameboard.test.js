import Gameboard from './gameboard';
import Ship from './ship';

describe('Gameboard', () => {
  test('create a gameboard', () => {
    const gameboard = new Gameboard();
    expect(gameboard).toBeDefined();
  });

  test('should have a grid', () => {
    let gameboard = new Gameboard();
    expect(gameboard.grid).toBeDefined();
    expect(gameboard.grid.length).toBe(10);
    expect(gameboard.grid[0].length).toBe(10);
  });

  test('placeShip should exist', () => {
    const gameboard = new Gameboard();
    expect(gameboard.placeShip).toBeDefined();
  });

  test('place ship on gameboard', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.placeShip(ship, 0, 0, 'horizontal');
    expect(gameboard.grid[0][0]).toBe(ship);
    expect(gameboard.grid[0][1]).toBe(ship);
    expect(gameboard.grid[0][2]).toBe(ship);
  });

  test('place ship on gameboard vertical', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.placeShip(ship, 0, 0, 'vertical');
    expect(gameboard.grid[0][0]).toBe(ship);
    expect(gameboard.grid[1][0]).toBe(ship);
    expect(gameboard.grid[2][0]).toBe(ship);
  });

  test('receive hit', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.placeShip(ship, 0, 0, 'horizontal');
    gameboard.receiveAttack(0, 0);
    expect(ship.timesHit).toBe(1);
    expect(gameboard.grid[0][0]).toBe('hit');
    gameboard.receiveAttack(1, 0);
    expect(gameboard.grid[1][0]).toBe('miss');
  });

  test('see if every ship is sunk', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(2);
    const ship2 = new Ship(3);

    gameboard.placeShip(ship1, 0, 0, 'horizontal');
    gameboard.placeShip(ship2, 1, 0, 'horizontal');

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(1, 2);

    expect(ship1.isSunk()).toBe(true);
    expect(ship2.isSunk()).toBe(true);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
