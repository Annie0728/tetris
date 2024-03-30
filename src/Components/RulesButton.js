import React from "react";
import './Button.css';

function RulesButton(props) {
  return (
    <div className="rulesButton">
      <button className="Button" onClick={() => props.setPopup(true)}>Rules</button>
    </div>
  );
}
  
export default RulesButton;