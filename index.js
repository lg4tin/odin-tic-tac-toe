
let x = document.querySelector('.x');
let o = document.querySelector('.o');


x.addEventListener('click', () => {
  controlFlow.turn = 'X';
  controlFlow.turnHeader.innerText = `${controlFlow.turn}'s Turn`;
})

o.addEventListener('click', () => {
  controlFlow.turn = 'O';
  controlFlow.turnHeader.innerText = `${controlFlow.turn}'s Turn`;
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
            setTimeout(() => {
              controlFlow.whoWon();
            }, 250);
          }
        } else {
          if (boardDivs[i].innerText === '') {
            boardDivs[i].innerText = 'O';
            controlFlow.turn = 'X';
            setTimeout(() => {
              controlFlow.whoWon();
            }, 250);
          }
        }
        controlFlow.turnHeader.innerText = `${controlFlow.turn}'s Turn`;
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
  let turnHeader = document.querySelector('.turn');

  let restart = document.querySelector('.restart');

  restart.addEventListener('click', () => {
    gameboard.clearBoard();
  })

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

  const checkTie = () => {
    let divs = Array.from(gameboard.boardDivs);
    return divs.every(div => div.textContent != '');
  }

  const whoWon = () => {
    if (checkWin('X') == true) {
      alert('X Wins')
    } else if (checkWin('O') == true) {
      alert('O Wins');
    } else if (checkTie() == true && checkWin('X') == false && checkWin('O') == false) {
      alert('Tie');
    }
  }

  return {turn, checkWin, whoWon, checkTie, turnHeader};
})();

const Player = (name) => {
  const playerName = name;


}

gameboard.displayBoard()