import Ship from './ship';

const createGridSquare = (rowIndex, cellIndex, cell, isOpponent) => {
  const gridSquare = document.createElement('div');
  gridSquare.classList.add('grid-square');
  gridSquare.textContent = '';
  gridSquare.dataset.row = rowIndex;
  gridSquare.dataset.cell = cellIndex;

  if (!isOpponent && cell instanceof Ship) {
    gridSquare.classList.add('ship');
  }

  return gridSquare;
};

export default createGridSquare;
