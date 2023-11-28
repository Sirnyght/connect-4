export default function Cell({ updateBoard, cell, turn }) {
  function handleClick() {
    // update the board
    console.log(cell.index);
    updateBoard(cell, turn);
  }

  return (
    // cell data-testid=cell- + index

    // <div onClick={handleClick} className={info.position > 6 ? 'gamesquare' : player === 'player1' ? 'gamesquare top redmarker' : 'gamesquare top yellowmarker'}>
    // {info.value ?
    //     <div className={`testpiece_${info.position} gamesquare ${info.value}`} >
    //         {info.winner ? <div className='win'></div> : null}
    //     </div> : null}
    // </div>
    <div onClick={handleClick} className="cell">
      {cell.value}
    </div>


  );
}