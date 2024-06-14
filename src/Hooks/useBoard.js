import { useState, useCallback, useEffect } from "react";
import { buildBoard, nextBoard } from "../Util/BoardHelp";

// define main tetris board
export function useBoard(rows, columns, player, resetPlayer, addLinesMade) {
  const [board, setBoard] = useState(buildBoard(rows, columns));

  const resetBoard = useCallback(() => {
    setBoard(buildBoard(rows, columns));
  }, []);

  useEffect(() => {
    setBoard((prev) => nextBoard(prev, player, resetPlayer, addLinesMade, rows));
  }, [player, resetPlayer, addLinesMade]);

  return [board, resetBoard];
}