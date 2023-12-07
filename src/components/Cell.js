export default function Cell({ updateBoard, cell, turn }) {
  function handleClick() {
    // update the board
    updateBoard(cell, turn);
  }

  return (
    // add class player-turn where turn is turn props, test id is cell
    <div onClick={handleClick} className="cell" data-testid="cell">
      {/* {cell.value} */}
    </div>


  );
}