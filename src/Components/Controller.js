import React from "react";
import { actions, actionForKey } from "./Keys";

function Controller(props) {
  const onKeyDown = (key) => {

  };

  const onKeyUp = (key) => {
    const action = actionForKey(key.code);

    if (action === actions.quit) {
      props.setGameOver(true);
    }
  };

  return (
    <input 
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
      style={{position: "absolute"}}
    />
  );
}
    
export default Controller;