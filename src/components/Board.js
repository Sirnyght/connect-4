import Cell from "./Cell.js";

export default function Board({ board, updateBoard, turn }) {
    return (
        <div id="board">
            <div id="board-grid">
                {/* 42 cells */}
                    {board.map((cell, index) => {
                        return <Cell key={index} updateBoard={updateBoard} cell={cell} turn={turn} />;
                    }
                )}
            </div>
        </div>
    );
}
