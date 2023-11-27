import './App.css';
import { useState } from 'react';
import Board from './components/Board.js';

function App() {
  // board from 0 to 42
  const baseBoard = [0, 0, 0, 0, 0, 0, 0, 
                 0, 0, 0, 0, 0, 0, 0, 
                 0, 0, 0, 0, 0, 0, 0, 
                 0, 0, 0, 0, 0, 0, 0, 
                 0, 0, 0, 0, 0, 0, 0, 
                 0, 0, 0, 0, 0, 0, 0];

  const [turn, setTurn] = useState(1); // 1 or 2
  const [board, setBoard] = useState(baseBoard);


  function updateBoard(index, value) {
    // update the board
    const newBoard = board;
    console.log(index);
    console.log(newBoard[index]);
    if (newBoard[index] === 0) {
      if (turn === 1) {
        setTurn(2);
      }
      else {
        setTurn(1);
      }
      console.log("here");
      newBoard[index] = value;
    }
    else {
      console.log("Case already filled");
      return;
    }
    setBoard(newBoard);
    console.log(board); 
    return newBoard;
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
