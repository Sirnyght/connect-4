export default function Cell({ updateBoard, cell, turn }) {
  function handleClick() {
    // update the board
    console.log(cell.index);
    updateBoard(cell, turn);
  }

  return (

    <div onClick={handleClick} className="cell">
      {cell.value}
    </div>


  );
}