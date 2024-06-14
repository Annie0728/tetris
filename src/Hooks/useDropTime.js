import { useState, useCallback, useEffect } from "react";

// default time values
const defaultDropTime = 1000;
const minDropTime = 100;
const speedIncrement = 50;

// define droptime
export function useDropTime(stats) {
  const [dropTime, setDropTime] = useState(defaultDropTime);
  const [prevDropTime, setPrevDropTime] = useState(null);

  // pause droptime if game is paused
  const pauseDropTime = useCallback(() => {
    if (dropTime) {
      setPrevDropTime(dropTime);
    }

    setDropTime(null);
  }, [dropTime, prevDropTime]);

  // resume droptime if game is resumed
  const resumeDropTime = useCallback(() => {
    if (!prevDropTime) {
      return;
    }

    setDropTime(prevDropTime);
    setPrevDropTime(null);
  }, [prevDropTime]);

  useEffect(() => {
    const speed = speedIncrement * (stats.level - 1);
    const newDropTime = Math.max(defaultDropTime - speed, minDropTime);
    setDropTime(newDropTime);
  }, [stats.level, setDropTime]);

  return [dropTime, pauseDropTime, resumeDropTime];
}