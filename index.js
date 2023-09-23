let turnHeader = document.querySelector('.turn');

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

  

  const whosTurn = () => {
    if (turn === 'X') {
      turnHeader.innerText = "X's Turn";
    } else {
      turnHeader.innerText = "O's Turn";
    }
  }

  return {turn, whosTurn};
})();

const Player = (name) => {
  const playerName = name;


}

gameboard.displayBoard()