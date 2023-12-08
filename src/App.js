import './App.css';
import { useState } from 'react';

import Board from './components/Board.js';
import Logo from './components/Logo.js';
import { cells } from './utils/cells.js';
import { checkWin } from './utils/checkWin.js';


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
    // For the first cell in that column starting from the end that has a value of 0, update it.
    // Skip this if there is no row above it
    const firstEmptyCell = columnCells.reverse().find((c) => c.value === 0);

    if (firstEmptyCell) {
      firstEmptyCell.value = value;
      setBoard([...board]);
      setTurn(turn === 1 ? 2 : 1);
    }

    if (!firstEmptyCell) return;

    const winner = checkWin(board, firstEmptyCell);
    // color winning cells in green
    if (winner[1]) {
      winner[1].forEach((c) => {
        const cellElement = document.getElementsByClassName('cell')[c.index];
        cellElement.classList.add('winner');
        setTimeout(() => {
          const token = cellElement.getElementsByClassName('token')[0];
          token.classList.add('winner');
        }, 10);
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
      }, 100);
    } else if (winner[0] === 3) {
      // Set game over to true
      setGameOver(true);
      // Delay alert for 100ms to allow winner cells to be colored
      setTimeout(() => {
        alert('It\'s a tie!');
      }, 100);
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
  
  return (
    <div className="app">
      <div>
        <button className="button" onClick={resetBoard}>Reset</button>
      </div>
      <div>
        <header id="header">
          <div className="logo">
            <Logo />
          </div>
          {/* display reset button */}
        </header>

        <div className="board">
          <Board board={board} updateBoard={updateBoard} turn={turn} />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
