const gameboard = (() => {
  let board = [
    ['x', 'o', 'x',],
    ['x', 'o', 'x',],
    ['x', 'o', 'x',]
  ];

  let boardDivs = document.querySelectorAll('.row div')

  const displayBoard = () => {
    for (let i in boardDivs) {
      boardDivs[i].textContent = board[i][i];
    }
  }
  return {displayBoard};
})();

gameboard.displayBoard()