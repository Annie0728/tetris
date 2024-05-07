import React, { useState } from "react";
import Block from "./Block";

function Tetris(props) {
  return (
    <div>
      {props.board.map(row => row.map((block, x) => <Block key={x} type={block[0]} />))}
    </div>
  );
}
    
export default Tetris;