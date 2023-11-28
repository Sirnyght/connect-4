import Cell from "./Cell.js";

export default function Board({ board, updateBoard, turn }) {
    return (
        <div id="board">
            <h2>Board</h2>
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
