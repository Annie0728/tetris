import { actions } from "../Components/Keys";
import { rotateMino } from "../Components/Tetromino";

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

const isCollided = (board, position, shape) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (board[row] && board[row][column] && !board[row][column][1]) {
          return true;
        }
      }
    }
  }

  return false;
}

const withinBoard = (board, position, shape) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const validPosition = board[row] && board[row][column];

        if (!validPosition) {
          return false;
        }
      }
    }
  }

  return true;
}

const attemptRotation = (board, player, setPlayer, direction) => {
  const shape = rotateMino(player.mino.shape, direction);
  const position = player.position;
  
  if (!isCollided(board, position, shape) && withinBoard(board, position, shape)) {
    return false;
  } else {
    setPlayer({ ...player, mino: {...player.mino, shape} });
  }
};

const playerController = (action, board, player, setPlayer, setGameOver) => {
  if (!action) {
    return;
  }

  if (action === actions.rotate_clock) {
    attemptRotation(board, player, setPlayer, 1);
  } else if (action === actions.rotate_counter) {
    attemptRotation(board, player, setPlayer, -1);
  }
};

export {buildBoard, transferToBoard, nextBoard, playerController};