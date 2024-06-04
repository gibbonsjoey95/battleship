const validateShipPlacement = (gameboard, row, col, length, orientation) => {
  if (orientation === 'horizontal') {
    if (col + length > gameboard.grid[0].length) return false;
    for (let i = col; i < col + length; i++) {
      if (gameboard.grid[row][i] !== null) return false;
    }
  } else {
    if (row + length > gameboard.grid.length) return false;
    for (let i = row; i < row + length; i++) {
      if (gameboard.grid[i][col] !== null) return false;
    }
  }
  return true;
};

export default validateShipPlacement;
