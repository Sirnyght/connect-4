import './App.css';
import { useState } from 'react';
import Board from './components/Board.js';
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
    if (winner === 1) {
      // Set game over to true
      setGameOver(true);
      alert('Player 1 wins!');
    } else if (winner === 2) {
      // Set game over to true
      setGameOver(true);
      alert('Player 2 wins!');
    } else if (winner === 3) {
      // Set game over to true
      setGameOver(true);
      alert('Tie!');
    }
  }

  function resetBoard() {
    console.log('resetting board');
    setBoard(JSON.parse(JSON.stringify(cells)));
    setTurn(1);
    setGameOver(false);
  }
  
  return (
    <div className="app">
      <h1>Connect 4</h1>
      <div className="board">
        <Board board={board} updateBoard={updateBoard} turn={turn} />
      </div>
      <div className="buttons">
        <button id="resetButton" onClick={resetBoard}>Reset</button>
      </div>
    </div>
  );
}

export default App;
