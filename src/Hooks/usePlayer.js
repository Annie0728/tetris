import { useState, useCallback } from "react";
import { generateMinoSequence } from "../Components/Tetromino";

const buildPlayer = (wacky, prev) => {
  let minoes;
  let holdMino;

  if (prev) {
    minoes = [...prev.minoes];
    if (minoes.length === 1) {
      minoes.unshift(...generateMinoSequence(wacky));
    }

    holdMino = prev.holdMino;
  } else {
    minoes = generateMinoSequence(wacky);
    holdMino = null;
  }

  return {
    collided: false,
    isFastDropping: false,
    canHold: true,
    position: { row: 0, column: 4},
    minoes,
    mino: minoes.pop(),
    holdMino
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