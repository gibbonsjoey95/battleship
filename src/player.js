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
    opponent.gameboard.receiveAttack(x, y);
  }
}

export default Player;
