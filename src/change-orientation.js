const changeOrientation = (event, orientation) => {
  if (event.key === 'r' || event.key === 'R') {
    orientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';
  }
};

export default changeOrientation;
