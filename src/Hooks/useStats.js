import { useState, useCallback } from "react";

const buildStats = () => ({
  score: 0,
  level: 1,
  linesMade: 0,
  linesPerLevel: 10
});

export function useStats() {
  const [stats, setStats] = useState(buildStats());

  const addLinesMade = useCallback(() => {

  }, []);

  return [stats, addLinesMade];
}