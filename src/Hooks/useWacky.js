import { useState, useCallback } from "react";

export function useWacky() {
  const [wacky, setWacky] = useState(false);

  const resetWacky = useCallback(() => {
    setWacky(false);
  }, []);

  return [wacky, setWacky, resetWacky];
}