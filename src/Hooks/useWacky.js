import { useState } from "react";

export function useWacky() {
  const [wacky, setWacky] = useState(false);

  return [wacky, setWacky];
}