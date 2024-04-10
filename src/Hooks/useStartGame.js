import { useState, useCallback } from "react";

export const useStartGame = () => {
  const [game, setGame] = useState(false);
  const resetGame = useCallback(() => {
    setGame(true);
  }, []);

  return [game, setGame, resetGame];
};