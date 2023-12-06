export default function Cell({ updateBoard, cell, turn }) {
  function handleClick() {
    // update the board
    updateBoard(cell, turn);
  }

  return (

    <div onClick={handleClick} className="cell">
      {cell.value}
    </div>


  );
}