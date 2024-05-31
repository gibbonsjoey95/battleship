import Gameboard from './gameboard';

class Player {
  constructor(type) {
    if (type !== 'real' && type !== 'computer') {
      throw new Error('Invalid player type. Must be "real" or "computer"');
    }
    this.type = type;
    this.gameboard = new Gameboard();
  }

  takeTurn(opponent, x, y) {
    if (this.type == 'real') {
      opponent.gameboard.receiveAttack(x, y);
    } else {
      return this.randomAttack(opponent.gameboard);
    }
  }

  randomAttack(opponent) {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (opponent.grid[x][y] === 'hit' || opponent.grid[x][y] === 'miss');

    return opponent.receiveAttack(x, y);
  }
}

export default Player;
