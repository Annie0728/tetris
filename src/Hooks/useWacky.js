import { useState } from "react";

// define wacky state
export function useWacky() {
  const [wacky, setWacky] = useState(false);

  return [wacky, setWacky];
}