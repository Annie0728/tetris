const buildBoard = (rows, columns) => {
  return Array.from(Array(rows), () => new Array(columns).fill([0, 'empty']));
};

export {buildBoard};