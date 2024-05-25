import { useState, useEffect } from "react";
import { buildBoard, nextBoard } from "../Util/TetrisHelp";

export function useBoard(rows, columns, player, resetPlayer, addLinesMade) {
  const [board, setBoard] = useState(buildBoard(rows, columns));

  /*

  useEffect(() => {
    setBoard((prevBoard) => {
      nextBoard(prevBoard, player, resetPlayer, addLinesMade);
    });
  }, [player, resetPlayer, addLinesMade]);

  */

  return [board];
}