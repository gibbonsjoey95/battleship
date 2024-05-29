class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  hit() {
    if (this.timesHit < this.length) {
      this.timesHit++;
    }
    this.checkIfSunk();
  }

  checkIfSunk() {
    this.sunk = this.timesHit >= this.length;
  }

  isSunk() {
    return this.sunk;
  }
}

export default Ship;
