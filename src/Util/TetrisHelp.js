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

  let board = prevBoard.map(row => row.map((block) => block[1] === true ? block : [0, false]));
  board = transferToBoard(player.mino.className, player.collided, player.position, board, player.mino.shape);

  return board;
};

export {buildBoard, transferToBoard, nextBoard};