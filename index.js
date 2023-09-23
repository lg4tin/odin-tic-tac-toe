let turnHeader = document.querySelector('.turn');
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let restart = document.querySelector('.restart');

x.addEventListener('click', () => {
  controlFlow.turn = 'X';
  turnHeader.innerText = `${controlFlow.turn}'s Turn`;
})

o.addEventListener('click', () => {
  controlFlow.turn = 'O';
  turnHeader.innerText = `${controlFlow.turn}'s Turn`;
})

restart.addEventListener('click', () => {
  gameboard.clearBoard();
})

const gameboard = (() => {
  let board = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];

  let boardDivs = document.querySelectorAll('.row div');

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

  const clearBoard = () => {
    for (let i in boardDivs) {
      boardDivs[i].textContent = '';
    }
  }

  return {displayBoard, clearBoard, boardDivs};
})();

const controlFlow = (() => {
  let turn = 'X';

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWin = (turn) => {
    return winningCombinations.some(combo => {
      return combo.every(index => {
        return gameboard.boardDivs[index].textContent == turn;
      })
    })
  }

  return {turn, checkWin};
})();

const Player = (name) => {
  const playerName = name;


}

gameboard.displayBoard()