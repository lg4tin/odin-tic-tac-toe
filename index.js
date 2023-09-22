const gameboard = (() => {
  let board = [
    ['x', 'o', 'x',],
    ['x', 'o', 'x',],
    ['x', 'o', 'x',]
  ];

  const displayBoard = () => {
    document.body.textContent = board;
  }
  return {displayBoard};
})();

gameboard.displayBoard()