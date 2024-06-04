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

const actionForKey = (keyCode) => {
  return keys[keyCode];
};

const actionIsDrop = (action) => {
  return (action === actions.fast_drop || actions === actions.slow_drop);
}

export {actions, keys, actionForKey, actionIsDrop};