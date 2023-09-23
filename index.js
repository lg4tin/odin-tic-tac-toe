let turnHeader = document.querySelector('.turn');
let x = document.querySelector('.x');
let o = document.querySelector('.o');

x.addEventListener('click', () => {
  controlFlow.turn = 'X';
  turnHeader.innerText = `${controlFlow.turn}'s Turn`;
})

o.addEventListener('click', () => {
  controlFlow.turn = 'O';
  turnHeader.innerText = `${controlFlow.turn}'s Turn`;
})

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
          if (boardDivs[i].innerText === '') {
            boardDivs[i].innerText = 'X';
            controlFlow.turn = 'O';
          }
        } else {
          if (boardDivs[i].innerText === '') {
            boardDivs[i].innerText = 'O';
            controlFlow.turn = 'X';
          }
        }
        turnHeader.innerText = `${controlFlow.turn}'s Turn`;
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