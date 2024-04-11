import { defaultBlock } from "./buildBlock";

export const buildBoard = ({ rows, columns }) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultBlock }))
  );

  return {
    rows: builtRows,
    size: { rows, columns }
  }
}