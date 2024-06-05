import React, { useState } from "react";
import "./tic-tac-toe.css";

function TicTacToe() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  const handleClick = (i, j) => {
    if (gameOver) return;
    if (board[i][j] === "") {
      const newBoard = [...board];
      newBoard[i][j] = turn;
      setBoard(newBoard);
      checkWinner();
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== ""
      ) {
        setGameOver(true);
        setWinner(board[i][0]);
        return;
      }
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== ""
      ) {
        setGameOver(true);
        setWinner(board[0][i]);
        return;
      }
    }
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== ""
    ) {
      setGameOver(true);
      setWinner(board[0][0]);
      return;
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== ""
    ) {
      setGameOver(true);
      setWinner(board[0][2]);
      return;
    }
  };

  const reset = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          {board.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`items ${
                    cell === "X" ? "x" : cell === "O" ? "o" : ""
                  }`}
                  onClick={() => handleClick(i, j)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {gameOver && <h2>Winner: {winner}</h2>}
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default TicTacToe;
