import { movePlayer } from "./PlayerHelp";

// functions that help facilitate board functionality

// build boards
const buildBoard = (rows, columns) => {
  return Array.from(Array(rows), () => new Array(columns).fill([0, false]));
};


// transfer pieces between boards
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

// calculates where the piece will go when collided
const findDropPosition = (board, position, shape, rows) => {
  let max = rows - position.row + 1;
  let row = 0;

  for (let x = 0; x < max; x++) {
    const delta = { row: x, column: 0 };
    const result = movePlayer(delta, position, shape, board);
    const { collided } = result;

    if (collided) {
      break;
    } else {
      row = position.row + x;
    }
  }

  return { ...position, row };
}

// defines what the next board state is like
const nextBoard = (prevBoard, player, resetPlayer, addLinesMade, rows) => {
  const { mino, position } = player;
  const dropPosition = findDropPosition(prevBoard, position, mino.shape, rows);
  const className = `${mino.className}${player.isFastDropping ? "" : "_ghost"}`;

  // copy over old board state
  let newBoard = prevBoard.map((row) => row.map((block) => block[1] ? block : [0, false]));
  
  // render drop position ghost
  newBoard = transferToBoard(className, player.isFastDropping, dropPosition, newBoard, mino.shape);

  // place the piece
  if (!player.isFastDropping) {
    newBoard = transferToBoard(mino.className, player.collided, position, newBoard, mino.shape);
  }

  // clear any completed lines
  const blankRow = newBoard[0].map((_) => [0, false]);
  let linesCleared = 0;

  newBoard = newBoard.reduce((acc, row) => {
    if (row.every((column) => column[1] === true)) {
      linesCleared++;
      acc.unshift([...blankRow]);
    } else {
      acc.push(row)
    }

    return acc;
  }, []);

  if (linesCleared > 0) {
    addLinesMade(linesCleared);
  }

  // reset player position and piece when current mino collides
  if (player.collided || player.isFastDropping) {
    resetPlayer();
  }

  return newBoard;
};

export {buildBoard, transferToBoard, nextBoard};