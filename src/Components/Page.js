import React from "react";
import './Page.css';
import Board from "./Board";
import PieceBox from "./PieceBox";
import RulesButton from "./RulesButton";

function Page(props) {
    return (
      <div className="Page">
        <Board />
        <PieceBox />
        <RulesButton setPopup={props.setPopup} />
      </div>
    );
}
      
export default Page;