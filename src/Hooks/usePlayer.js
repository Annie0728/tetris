import { useState, useCallback } from "react";
import { randomMino, randomWackyMino } from "../Components/Tetromino";

const buildPlayer = (wacky, prev) => {
  let minoes;

  if (prev) {
    minoes = [...prev.minoes];
    if (wacky) {
      minoes.unshift(randomWackyMino());
    } else {
      minoes.unshift(randomMino());
    }
  } else {
    minoes = Array(2).fill(0).map((_) => wacky ? randomWackyMino() : randomMino());
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4},
    minoes,
    mino: minoes.pop(),
    holdMino: null
  }
};

export function usePlayer(wacky) {
  const [player, setPlayer] = useState(buildPlayer(wacky));

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(wacky, prev))
  }, [wacky]);

  const newPlayer = useCallback(() => {
    setPlayer(buildPlayer(wacky))
  }, [wacky]);

  return [player, setPlayer, resetPlayer, newPlayer];
}