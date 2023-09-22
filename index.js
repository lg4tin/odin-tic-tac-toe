const gameboard = (() => {
  let board = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];

  let boardDivs = document.querySelectorAll('.row div')

  const displayBoard = () => {
    for (let i in boardDivs) {
      boardDivs[i].textContent = board[i];
      boardDivs[i].addEventListener('click', () => {
        if (controlFlow.turn === 'X') {
          boardDivs[i].innerText = 'X';
          controlFlow.turn = 'O';
        } else {
          boardDivs[i].innerText = 'O';
          controlFlow.turn = 'X';
        }
      })
    }
  }
  return {displayBoard};
})();

const controlFlow = (() => {
  let turn = 'X';

  

  return {turn};
})();

const Player = (name) => {
  const playerName = name;


}

gameboard.displayBoard()