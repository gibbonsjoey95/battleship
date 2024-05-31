import Player from './player';
import Gameboard from './gameboard';
import Ship from './ship';

describe('Player', () => {
  test('does player class exist', () => {
    const player = new Player('real');
    expect(player).toBeDefined();
  });

  test('player is a real player or computer', () => {
    const player = new Player('real');
    const player2 = new Player('computer');
    expect(player.type).toBe('real');
    expect(player2.type).toBe('computer');
  });

  test('player has a gameboard', () => {
    const player = new Player('real');
    expect(player.gameboard).toBeDefined();
  });

  test('player2 0,0 is miss', () => {
    const player1 = new Player('real');
    const player2 = new Player('computer');
    const ship = new Ship(3);

    player2.gameboard.placeShip(ship, 0, 1, 'horizontal');
    player1.takeTurn(player2, 0, 0);

    expect(player2.gameboard.grid[0][0]).toBe('miss');
    player1.takeTurn(player2, 0, 3);
    expect(player2.gameboard.grid[0][3]).toBe('hit');
  });

  test('computer takes turn', () => {
    const player = new Player('computer');
    const opponent = new Player('real');
    const ship = new Ship(4);

    opponent.gameboard.placeShip(ship, 0, 0, 'horizontal');

    player.takeTurn(opponent, 0, 0);

    const flattenedGrid = opponent.gameboard.grid.flat();
    const hitsAndMisses = flattenedGrid.filter(
      (cell) => cell === 'hit' || cell === 'miss',
    );
    expect(hitsAndMisses.length).toBe(1);
  });
});
