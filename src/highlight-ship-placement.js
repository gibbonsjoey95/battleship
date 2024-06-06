const highlightShipPlacement = (
  playerState,
  rowIndex,
  cellIndex,
  highlight,
) => {
  for (let i = 0; i < playerState.currentShipLength; i++) {
    const x =
      playerState.orientation === 'horizontal' ? rowIndex : rowIndex + i;
    const y =
      playerState.orientation === 'horizontal' ? cellIndex + i : cellIndex;
    if (x < 10 && y < 10) {
      const square = document.querySelector(
        `[data-row='${x}'][data-cell='${y}']`,
      );
      if (square) {
        square.style.backgroundColor = highlight ? 'purple' : '';
      }
    }
  }
};

export default highlightShipPlacement;
