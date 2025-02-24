import { useState } from "react";

import Board from "./Board";

const Game = () => {
  const style = {
    width: "200px",
  };

  // This function calculates the winner of the game. There are eight possible winning combinations
  const calculateGameState = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Check each winning combination
    for (let s = 0; s < lines.length; s++) {
      const [a, b, c] = lines[s];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Return the winner which is either "X" or "O"
      }
    }
    return null; // Return null if there is no winner
  };

  const [squares, setSquares] = useState(Array(9).fill(null)); // Initialise the board with 9 empty squares
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const winner = calculateGameState(squares);

  const handleClick = (idx) => {
    const squaresCopy = [...squares];
    if (winner || squaresCopy[idx]) return;
    squaresCopy[idx] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setGameStarted(true);
  };

  return (
    <>
      {gameStarted && <Board squares={squares} onClick={handleClick} />} 
      <div style={style}>
        {gameStarted && (
          <p>
            {winner
              ? `Winner: ${winner}`
              : `Next Player: ${xIsNext ? "X" : "O"}`}
          </p>
        )}
        <button onClick={restartGame}>
          {gameStarted ? "Restart Game" : "Start Game"}      
        </button>
      </div>
    </>
  );
};

export default Game;