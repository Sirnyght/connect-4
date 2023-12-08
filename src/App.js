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

  function updateBoard(cell, value) {
    if (gameOver) return;

    // First, get cell column and row
    const col = cell.col;
    // Then, get the cells in that column
    const columnCells = board.filter((c) => c.col === col); 
    console.log(columnCells);
    // For the first cell in that column starting from the end that has a value of 0, update it.
    // Skip this if there is no row above it
    const firstEmptyCell = columnCells.reverse().find((c) => c.value === 0);

    if (firstEmptyCell) {
      console.log(firstEmptyCell);
      firstEmptyCell.value = value;
      setBoard([...board]);
      setTurn(turn === 1 ? 2 : 1);
    }

    if (!firstEmptyCell) return;

    const winner = checkWin(board, firstEmptyCell);
    // color winning cells in green
    if (winner[1]) {
      console.log(winner[1]);
      winner[1].forEach((c) => {
        console.log(c);
        console.log(c.index);
        const cellElement = document.querySelector(`[data-row="${c.row}"][data-col="${c.col}"]`);
        // if cellElement is not null first child is token
        console.log(cellElement);
        setTimeout(() => {
          cellElement.firstChild.classList.add('winner');
        }, 100);
      });
    }
    
    if (winner[0] === 1) {
      // Set game over to true
      setGameOver(true);
      // Delay alert for 100ms to allow winner cells to be colored
      setTimeout(() => {
        alert('Player 1 wins!');
      }, 200);
    } else if (winner[0] === 2) {
      // Set game over to true
      setGameOver(true);
      // Delay alert for 100ms to allow winner cells to be colored
      setTimeout(() => {
        alert('Player 2 wins!');
      }, 200);
    } else if (winner[0] === 3) {
      // Set game over to true
      setGameOver(true);
      // Delay alert for 100ms to allow winner cells to be colored
      setTimeout(() => {
        alert('It\'s a tie!');
      }, 200);
    }
  }

  function resetBoard() {
    console.log('resetting board');
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
    setBoard(reverse(board.slice(), col));
    setTurn(turn === 1 ? 2 : 1);
    // For cells in the column, check a potential win
    // If there is a win, attribute the winner class to the cells
    // If there is no win, do nothing
    // If there is a tie, attribute the tie class to the cells
    // If there is no tie, do nothing
    // If there is a win, set game over to true
    // Get First FIlled Cel of col
    const columnCells = board.filter((c) => c.col === col && c.value !== 0);
    // For each filled cell, check if there is a win
    columnCells.forEach((c) => {
      const winner = checkWin(board, c);
      // color winning cells in green
      if (winner[1]) {
        console.log(winner[1]);
        winner[1].forEach((c) => {
          console.log(c);
          console.log(c.index);
          const cellElement = document.querySelector(`[data-row="${c.row}"][data-col="${c.col}"]`);
          // if cellElement is not null first child is token
          console.log(cellElement);
          setTimeout(() => {
            cellElement.firstChild.classList.add('winner');
          }, 100);
        });
      }
      
      if (winner[0] === 1) {
        // Set game over to true
        setGameOver(true);
        // Delay alert for 100ms to allow winner cells to be colored
        setTimeout(() => {
          alert('Player 1 wins!');
        }, 200);
      } else if (winner[0] === 2) {
        // Set game over to true
        setGameOver(true);
        // Delay alert for 100ms to allow winner cells to be colored
        setTimeout(() => {
          alert('Player 2 wins!');
        }, 200);
      } else if (winner[0] === 3) {
        // Set game over to true
        setGameOver(true);
        // Delay alert for 100ms to allow winner cells to be colored
        setTimeout(() => {
          alert('It\'s a tie!');
        }, 200);
      }
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
