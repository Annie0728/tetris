import React, { useState } from "react";
import styled from "styled-components";

function StartButton() {
  const Button = styled.button`
    background-color: #8A84E2;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    border: 0; 
    height: 50px;
    width: 150px;
    font-size: 1.0em;
    margin: 10px 0px;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #59588B;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
  `;

  return (
    <div className="startButton">
      <Button>Start Game</Button>
    </div>
  );
}
  
export default StartButton;
