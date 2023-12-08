import Token from './Token.js';

export default function Cell({ updateBoard, cell, turn }) {
  return (
    // add class player-turn where turn is turn props, test id is cell
    <div onClick={() => updateBoard(cell, turn)} className="cell" data-testid="cell" data-row={cell.row} data-col={cell.col}>
      {cell.value !== 0 ? <Token position={cell.index} player={cell.value} /> : null}
    </div>
  );
}