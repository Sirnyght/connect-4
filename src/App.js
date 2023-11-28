import './App.css';
import { useState } from 'react';
import Board from './components/Board.js';
import { cells } from './utils/cells.js';


function App() {
  const [turn, setTurn] = useState(1); // 1 or 2
  const [board, setBoard] = useState(cells);

  function updateBoard(cell, value) {
    // First, get cell column and row
    const col = cell.col;
    // Then, get the cells in that column
    const columnCells = board.filter((c) => c.col === col);
    // For the first cell in that column starting from the end that has a value of 0, update it
    const firstEmptyCell = columnCells.reverse().find((c) => c.value === 0);
    if (firstEmptyCell) {
      firstEmptyCell.value = value;
      setBoard([...board]);
      setTurn(turn === 1 ? 2 : 1);
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
