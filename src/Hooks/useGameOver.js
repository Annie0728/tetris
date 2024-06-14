import { useState, useCallback } from "react";

// define gameover state
export function useGameOver() {
  const [gameOver, setGameOver] = useState(true);

  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);

  return [gameOver, setGameOver, resetGameOver];
}