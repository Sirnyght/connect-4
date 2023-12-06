import './App.css';
import { useState } from 'react';
import Board from './components/Board.js';
import { cells } from './utils/cells.js';
import { checkWin } from './utils/checkWin.js';


function App() {
  const [turn, setTurn] = useState(1); // 1 or 2
  const [board, setBoard] = useState(cells);
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

    // let firstEmptyCell = null;
    // for (let i = columnCells.length - 1; i >= 0; i--) {
    //   if (columnCells[i].value === 0) {
    //     firstEmptyCell = columnCells[i];
    //     break;
    //   }
    // }

    // if (!firstEmptyCell) return;

    // // Update the board
    // const newBoard = board.map((c) => {
    //   if (c.index === firstEmptyCell.index) {
    //     return {
    //       ...c,
    //       value,
    //     };
    //   }
    //   return c;
    // });

    // setBoard(newBoard);

    // // Update the turn
    // setTurn(turn === 1 ? 2 : 1);

    // Then, check for a win
    // If there is a win, alert the winner
    // If there is a tie, alert the tie
    // Otherwise, do nothing
    
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
  
  return (
    <div className="app">
      <h1>Connect 4</h1>
      <div className="board">
        <Board board={board} updateBoard={updateBoard} turn={turn} />
      </div>
    </div>
  );
}

export default App;
