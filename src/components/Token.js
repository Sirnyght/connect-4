export default function Token({ position, player }) {

  return (
    // add class token_ position where position is position props and turn is  turn === 1 ? player-1 : player-2 
    <div className={`token token_${position} ${player === 1 ? 'player-1' : 'player-2'}`}>
    </div>
  );
}