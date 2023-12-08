import './App.css';
import { useState } from 'react';

import Board from './components/Board.js';
import Logo from './components/Logo.js';
import { cells } from './utils/cells.js';
import { checkWin } from './utils/checkWin.js';
import { reverse } from './utils/reverse.js';


function App() {
  const [turn, setTurn] = useState(1); // 1 or 2
  const [board, setBoard] = useState(JSON.parse(JSON.stringify(cells))); // Deep copy to avoid mutating original cells
  const [gameOver, setGameOver] = useState(false); // true or false

  function alertWinner(winner) {
    switch(winner) {
      case 1:
        setGameOver(true);
        setTimeout(() => {
          alert('Player 1 wins!');
        }, 200);
        break;
      case 2:
        setGameOver(true);
        setTimeout(() => {
          alert('Player 2 wins!');
        }, 200);
        break;
      case 3:
        setGameOver(true);
        setTimeout(() => {
          alert('It\'s a tie!');
        }, 200);
        break;
      default:
        break;
    }
  }

  function updateBoard(cell, value) {
    if (gameOver) return;
    // Get the cells in that column
    const columnCells = board.filter((c) => c.col === cell.col); 
    // For the first cell in that column starting from the end that has a value of 0, update it.
    // Skip this if there is no row above it
    const firstEmptyCell = columnCells.reverse().find((c) => c.value === 0);
    if (!firstEmptyCell) return
    else {
      firstEmptyCell.value = value;
      setBoard([...board]);
      setTurn(turn === 1 ? 2 : 1);
    }

    const winner = checkWin(board, firstEmptyCell);
    // color winning cells in green
    if (winner[1]) {
      winner[1].forEach((c) => {
        const cellElement = document.querySelector(`[data-row="${c.row}"][data-col="${c.col}"]`);
        setTimeout(() => {
          cellElement.firstChild.classList.add('winner');
        }, 10);
      });
    }
    alertWinner(winner[0]);
  }

  function resetBoard() {
    setBoard(JSON.parse(JSON.stringify(cells)));
    setTurn(1);
    setGameOver(false);
    // Remove all other classes than cell from cells
    const cellElements = document.getElementsByClassName('cell');
    for (let i = 0; i < cellElements.length; i++) {
      cellElements[i].classList.remove('player-1', 'player-2', 'winner');
    }
  }

  function reverseCol(col) {
    if (gameOver) return;
    setBoard(reverse(board.slice(), col));
    setTurn(turn === 1 ? 2 : 1);
    // For cells in the column, check a potential win
    // If there is a win, attribute the winner class to the cells
    // If there is no win, do nothing
    // If there is a tie, attribute the tie class to the cells
    // If there is no tie, do nothing
    // If there is a win, set game over to true
    // Get First Filled Cel of col
    const columnCells = board.filter((c) => c.col === col && c.value !== 0);
    // For each filled cell, check if there is a win
    columnCells.forEach((c) => { 
      const winner = checkWin(board, c);
      // color winning cells in green
      if (winner[1]) {
        winner[1].forEach((c) => {
          const cellElement = document.querySelector(`[data-row="${c.row}"][data-col="${c.col}"]`);
          setTimeout(() => {
            cellElement.firstChild.classList.add('winner');
          }, 10);
        });
      }
      alertWinner(winner[0]);
    }
    );
  } 

  return (
    <div className="app">
      <div className="left">
        <h1>Connect Four</h1>
        <h2>Player {turn}'s turn</h2>
        <h3>{gameOver ? 'Game over' : ''}</h3>
      </div>
      <div>
        <header id="header">
          <div className="logo">
            <Logo />
          </div>
        </header>
        <div className="board">
          <Board board={board} updateBoard={updateBoard} turn={turn} reverseCol={reverseCol} />
        </div>
      </div>
      <div>
        <button className="button" onClick={resetBoard}>Reset</button>
      </div>
    </div>
  );
}

export default App;
