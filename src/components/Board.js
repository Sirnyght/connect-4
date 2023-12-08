import Cell from "./Cell.js";

export default function Board({ board, updateBoard, turn, reverseCol }) {

    return (
        <div id="board">
            <div id="board-grid">
                {/* 42 cells */}
                {/* Seven columns */}
                {/* Six rows */}
                {/* {board.map((cell, index) => {
                    return (
                        <Cell
                            key={index}
                            cell={cell}
                            updateBoard={updateBoard}
                            turn={turn}
                        />
                    );
                }
                )} */}
                {/* Column 1 */}
                <div className="colTest">
                    <button className="button button-reverse" onClick={() => reverseCol(0)}></button>
                    <div className="board-col board-col-0">
                        {board.map((cell, index) => {
                            if (index % 7 === 0) {
                                return <Cell key={index} cell={cell} updateBoard={updateBoard} turn={turn} />
                            } else return null;
                        })}
                    </div>    
                </div>
                {/* Column 2 */}
                <div className="colTest">
                    <button className="button button-reverse" onClick={() => reverseCol(1)}></button>
                    <div className="board-col board-col-1">
                        {board.map((cell, index) => {
                            if (index % 7 === 1) {
                                return <Cell key={index} cell={cell} updateBoard={updateBoard} turn={turn} />
                            } else return null;
                        })}
                    </div>
                </div>
                {/* Column 3 */}
                <div className="colTest">
                    <button className="button button-reverse" onClick={() => reverseCol(2)}></button>
                    <div className="board-col board-col-2">
                        {board.map((cell, index) => {
                            if (index % 7 === 2) {
                                return <Cell key={index} cell={cell} updateBoard={updateBoard} turn={turn} />
                            } else return null;
                        })}
                    </div>
                </div>
                {/* Column 4 */}
                <div className="colTest">
                    <button className="button button-reverse" onClick={() => reverseCol(3)}></button>
                    <div className="board-col board-col-3">
                        {board.map((cell, index) => {
                            if (index % 7 === 3) {
                                return <Cell key={index} cell={cell} updateBoard={updateBoard} turn={turn} />
                            } else return null;
                        })}
                    </div>
                </div>
                {/* Column 5 */} else return null;
                <div className="colTest">
                    <button className="button button-reverse" onClick={() => reverseCol(4)}></button>
                    <div className="board-col board-col-4">
                        {board.map((cell, index) => {
                            if (index % 7 === 4) {
                                return <Cell key={index} cell={cell} updateBoard={updateBoard} turn={turn} />
                            } else return null;
                        })}
                    </div>
                </div>
                {/* Column 6 */}
                <div className="colTest" >
                    <button className="button button-reverse" onClick={() => reverseCol(5)}></button>
                    <div className="board-col board-col-5">
                        {board.map((cell, index) => {
                            if (index % 7 === 5) {
                                return <Cell key={index} cell={cell} updateBoard={updateBoard} turn={turn} />
                            } else return null;
                        })}
                    </div>
                </div>
                {/* Column 7 */}
                <div className="colTest">
                    <button className="button button-reverse" onClick={() => reverseCol(6)}></button>
                    <div className="board-col board-col-6">
                        {board.map((cell, index) => {
                            if (index % 7 === 6) {
                                return <Cell key={index} cell={cell} updateBoard={updateBoard} turn={turn} />
                            } else return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}