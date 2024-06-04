import { useState, useCallback } from "react";
import { randomMino, randomWackyMino } from "../Components/Tetromino";

const buildPlayer = (prev) => {
  let minoes;

  if (prev) {
    minoes = [...prev.minoes];
    minoes.unshift(randomMino());
  } else {
    minoes = Array(2).fill(0).map((_) => randomMino());
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4},
    minoes,
    mino: minoes.pop()
  }
};

export function usePlayer() {
  const [player, setPlayer] = useState(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev))
  }, []);

  const newPlayer = useCallback(() => {
    setPlayer(buildPlayer())
  }, []);

  return [player, setPlayer, resetPlayer, newPlayer];
}