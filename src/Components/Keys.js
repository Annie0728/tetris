// possible actions the player can take
const actions = {
  left: "left",
  right: "right",
  pause: "pause",
  quit: "quit",
  rotate_clock: "rotate_clock",
  rotate_counter: "rotate_counter",
  slow_drop: "slow_drop",
  fast_drop: "fast_drop",
  hold: "hold"
};

// keys to each action
const keys = {
  ArrowLeft: actions.left,
  ArrowRight: actions.right,
  KeyP: actions.pause,
  KeyQ: actions.quit,
  KeyX: actions.rotate_clock,
  ArrowUp: actions.rotate_clock,
  KeyZ: actions.rotate_counter,
  ArrowDown: actions.slow_drop,
  Space: actions.fast_drop,
  KeyC: actions.hold 
};

// get the action for the key pressed
const actionForKey = (keyCode) => {
  return keys[keyCode];
};

// see action is a fast-drop
const actionIsDrop = (action) => {
  return (action === actions.fast_drop || actions === actions.slow_drop);
}

export {actions, keys, actionForKey, actionIsDrop};