const rows = 20;
const columns = 10;

const createGame = () => {
  return Array.from(Array(rows), () => new Array(columns).fill(['fill', 'empty']));
};

export {rows, columns, createGame};