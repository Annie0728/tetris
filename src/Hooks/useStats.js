import { useState, useCallback } from "react";

const buildStats = () => ({
  score: 0,
  level: 1,
  linesMade: 0,
  linesPerLevel: 10
});

export function useStats() {
  const [stats, setStats] = useState(buildStats());

  const resetStats = useCallback(() => {
    setStats(buildStats());
  }, []);

  const addLinesMade = useCallback((lines) => {
    setStats((prevStats) => {
      const score = prevStats.score + lines * 100;
      const { linesPerLevel } = prevStats;
      const linesMade = prevStats.linesMade + lines;
      const level = linesMade > (linesPerLevel * prevStats.level) ? prevStats.level + 1 : prevStats.level;

      return { score, level, linesMade, linesPerLevel };
    }, [])
  }, []);

  return [stats, resetStats, addLinesMade];
}