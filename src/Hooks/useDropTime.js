import { useState, useCallback, useEffect } from "react";

const defaultDropTime = 1000;
const minDropTime = 100;
const speedIncrement = 50;

export function useDropTime(stats) {
  const [dropTime, setDropTime] = useState(defaultDropTime);
  const [prevDropTime, setPrevDropTime] = useState();

  const pauseDropTime = useCallback(() => {
    if (dropTime) {
      setPrevDropTime(dropTime);
    }

    setDropTime(null);
  }, [dropTime, prevDropTime]);

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