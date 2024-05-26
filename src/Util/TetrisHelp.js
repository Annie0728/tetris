const buildBoard = (rows, columns) => {
  return Array.from(Array(rows), () => new Array(columns).fill([0, false]));
};

const transferToBoard = (className, isOccupied, position, board, shape) => {
  shape.forEach((row, y) => {
    row.forEach((block, x) => {
      if (block !== 0) {
        const occupied = isOccupied;
        const _y = y + position.row;
        const _x =  x + position.column;
        board[_y][_x] = [className, occupied]
      }
    })
  });

  return board;
};

const nextBoard = (prevBoard, player, resetPlayer, addLinesMade) => {
  const { mino, position } = player;

  let newBoard = prevBoard.map((row) => row.map((block) => block[1] ? block : [0, false]));
  newBoard = transferToBoard(mino.className, player.collided, position, newBoard, mino.shape);

  return newBoard;
};

export {buildBoard, transferToBoard, nextBoard};