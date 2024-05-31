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

    player1.takeTurn(player2, 0, 0);

    expect(player2.gameboard.grid[0][0]).toBe('miss');
  });
});
