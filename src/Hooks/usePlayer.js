import { useState, useCallback } from "react";
import { randomMino, randomWackyMino } from "../Components/Tetromino";

export function usePlayer(wacky) {
  /*
  const [player, setPlayer] = useState({
    currentPosition: { x : columns / 2 - 2, y : 0 },
    mino: wacky ? randomWackyMino().shape : randomMino().shape,
    collide: false
  });

  const resetPlayer = useCallback(() => {
    setPlayer({
      currentPosition: { x : columns / 2 - 2, y : 0 },
      mino: wacky ? randomWackyMino().shape : randomMino().shape,
      collide: false
    })
  }, [wacky]);

  return [player, setPlayer, resetPlayer];
  */
}