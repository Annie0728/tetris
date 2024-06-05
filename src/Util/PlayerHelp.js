import { actions } from "../Components/Keys";
import { rotateMino } from "../Components/Tetromino";

const isCollided = (board, position, shape) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (board[row] && board[row][column] && board[row][column][1]) {
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
    setPlayer({ ...player, mino: {...player.mino, shape} });
  } else {    
    let newPosition = position;
    let offset = 1;

    while(isCollided(board, newPosition, shape) || !withinBoard(board, newPosition, shape)) {
      newPosition.column += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > shape[0].length) {
        return false;
      }
    }

    setPlayer({ ...player, position: {...player.position, newPosition}, mino: {...player.mino, shape} });
  }
};

const movePlayer = (delta, position, shape, board) => {
  const nextPosition = {
    row: position.row + delta.row,
    column: position.column + delta.column
  }

  const collided = isCollided(board, nextPosition, shape);
  const onBoard = withinBoard(board, nextPosition, shape);

  const invalidMove = !onBoard || (onBoard && collided);
  const newPosition = invalidMove ? position : nextPosition;

  const isMovingDown = delta.row > 0;
  const isHit = isMovingDown && (collided || !onBoard);

  return { collided: isHit, nextPosition: newPosition };
};

const attemptMovement = (board, player, setPlayer, action, setGameOver) => {
  const delta = { row: 0, column: 0 };
  let isFastDropping = false;

  if (action === actions.fast_drop) {
    isFastDropping = true;
  } else if (action === actions.slow_drop) {
    delta.row += 1;
  } else if (action === actions.right) {
    delta.column += 1;
  } else if (action === actions.left) {
    delta.column -= 1;
  }

  const { collided, nextPosition } = movePlayer(delta, player.position, player.mino.shape, board);

  const isGameOver = collided && player.position.row === 0;
  if (isGameOver) {
    setGameOver(true);
  }

  setPlayer({...player, collided, isFastDropping, position: nextPosition});
};

const playerController = (action, board, player, setPlayer, setGameOver) => {
  if (!action) {
    return;
  }

  if (action === actions.rotate_clock) {
    attemptRotation(board, player, setPlayer, 1);
  } else if (action === actions.rotate_counter) {
    attemptRotation(board, player, setPlayer, -1);
  } else {
    attemptMovement(board, player, setPlayer, action, setGameOver);
  }
};

export {playerController, movePlayer};