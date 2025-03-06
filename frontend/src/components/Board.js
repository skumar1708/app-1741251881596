import React from 'react';

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <button key={i} className="square" onClick={() => onClick(i)}>
          {square}
        </button>
      ))}
    </div>
  );
}

export default Board;