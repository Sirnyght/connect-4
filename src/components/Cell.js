export default function Cell({ updateBoard, index, turn }) {
  function handleClick() {
    // update the board
    console.log(index);
    updateBoard(index, turn);
  }

  return (
    <div className="cell" onClick={handleClick}>
    </div>
  );
}