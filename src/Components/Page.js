import React from "react";
import './Page.css';
import Board from "./Board";
import PieceBox from "./PieceBox";
import RulesButton from "./RulesButton";

function Page() {
    return (
      <div className="Page">
        <Board />
        <PieceBox />
        <RulesButton />
      </div>
    );
}
      
export default Page;