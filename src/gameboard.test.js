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

  test('validate ship placement exist', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);

    expect(gameboard.validateShipPlacement(ship, 0, 0)).toBeDefined();
  });

  test('validate ship placement', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    const result = gameboard.validateShipPlacement(ship, 0, 0, 'horizontal');
    const result2 = gameboard.validateShipPlacement(ship, 0, 9, 'horizontal');
    const result3 = gameboard.validateShipPlacement(ship, 4, 4, 'horizontal');
    const result4 = gameboard.validateShipPlacement(ship, 4, 8, 'horizontal');

    expect(result).toBe(true);
    expect(result2).toBe(false);
    expect(result3).toBe(true);
    expect(result4).toBe(false);
  });

  test('place ship on another ship', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);

    gameboard.placeShip(ship1, 4, 4, 'horizontal');

    const result = gameboard.validateShipPlacement(ship2, 4, 4, 'horizontal');
    const result2 = gameboard.validateShipPlacement(ship2, 4, 6, 'horizontal');
    const result3 = gameboard.validateShipPlacement(ship2, 4, 7, 'horizontal');
    const result4 = gameboard.validateShipPlacement(ship2, 5, 4, 'horizontal');
    const result5 = gameboard.validateShipPlacement(ship2, 4, 2, 'horizontal');

    expect(result).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(true);
    expect(result4).toBe(true);
    expect(result5).toBe(false);
  });

  test('validate vertical placement', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);

    gameboard.placeShip(ship1, 4, 4, 'horizontal');

    const result = gameboard.validateShipPlacement(ship2, 9, 0, 'vertical');
    const result2 = gameboard.validateShipPlacement(ship2, 9, 7, 'vertical');
    const result3 = gameboard.validateShipPlacement(ship2, 8, 4, 'vertical');

    expect(result).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
  });

  test('validate vertical placement on other ships', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);

    gameboard.placeShip(ship1, 4, 4, 'horizontal');

    const result = gameboard.validateShipPlacement(ship2, 4, 4, 'vertical');
    const result2 = gameboard.validateShipPlacement(ship2, 3, 5, 'vertical');

    expect(result).toBe(false);
    expect(result2).toBe(false);
  });
});
