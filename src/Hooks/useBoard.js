import { useState, useEffect } from "react";
import { buildBoard } from "../Util/TetrisHelp";

export function useBoard(rows, columns) {
  const [board, setBoard] = useState(buildBoard(rows, columns));

  /*
  useEffect(() => {
    const updateBoard = prevBoard => {
      const newBoard = prevBoard.map(row => row.map(cell => cell[1] === 'empty' ? [0, 'empty'] : cell));

      var mino = player.mino;
      
      var collide = player.collide ? 'merge' : 'empty';

      mino.forEach((row, y) => {
        row.forEach((ele, x) => {
          if (ele === 1) {
            var newXPos = x + player.currentPosition.x;
            var newYPos = y + player.currentPosition.y;
            newBoard[newYPos][newXPos] = [1, collide];
          }
        })
      });

      return newBoard;
    };

    setBoard(prevBoard => updateBoard(prevBoard));
  }, [player]);
  */

  return [board, setBoard];
}