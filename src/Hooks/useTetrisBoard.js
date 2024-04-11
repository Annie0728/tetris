import { useState } from "react";
import { buildBoard } from "../Util/buildBoard";

export const useTetrisBoard = ({ rows, columns }) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  return [board, setBoard];
};