import { useState, useCallback, useEffect } from "react";
import { buildBoard, nextBoard } from "../Util/BoardHelp";

export function useBoard(rows, columns, player, resetPlayer, addLinesMade) {
  const [board, setBoard] = useState(buildBoard(rows, columns));

  const resetBoard = useCallback(() => {
    setBoard(buildBoard(rows, columns));
  }, []);

  useEffect(() => {
    setBoard((prev) => nextBoard(prev, player, resetPlayer, addLinesMade));
  }, [player, resetPlayer, addLinesMade]);

  return [board, resetBoard];
}