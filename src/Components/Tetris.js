import React, { useState } from "react";
import Block from "./Block";

function Tetris(props) {
  const tetrisStyle = {
    gridRows: `repeat(${props.board.size.rows}, 1fr)`,
    gridColumnss: `repeat(${props.board.size.columns}, 1fr)`
  };

  return (
    <div style={tetrisStyle}>
      {props.board.rows.map((row, y) =>
        row.map((block, x) => (
          <Block key={x * props.board.size.columns + x} block={block} />
        ))
      )}
    </div>
  );
}
    
export default Tetris;