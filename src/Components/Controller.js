import React from "react";
import { actions, actionForKey } from "./Keys";
import { playerController } from "../Util/PlayerHelp";

function Controller(props) {
  const onKeyDown = (key) => {
    const action = actionForKey(key.code);

    handleInput(action);
  };

  const onKeyUp = (key) => {
    const action = actionForKey(key.code);

    if (action === actions.quit) {
      props.setGameOver(true);
    }
  };

  const handleInput = (action) => {
    playerController(action, props.board, props.player, props.setPlayer, props.setGameOver);
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