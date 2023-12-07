import Token from './Token.js';

export default function Cell({ updateBoard, cell, turn }) {
  function handleClick() {
    // update the board
    updateBoard(cell, turn);
  }

  return (
    // add class player-turn where turn is turn props, test id is cell
    <div onClick={handleClick} className="cell" data-testid="cell">
      {cell.value !== 0 ? <Token position={cell.index} player={cell.value} /> : null}
    </div>
  );
}