export default function Cell({ updateBoard, cell, turn }) {
  function handleClick() {
    // update the board
    updateBoard(cell, turn);

  }

  return (
    // add class player-turn where turn is turn props
    <div onClick={handleClick} className="cell">
      {/* {cell.value} */}
    </div>


  );
}