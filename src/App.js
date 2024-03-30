import React, { useState } from "react";
import './App.css';
import Page from "./Components/Page";

function App() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="App">
      <h1>TETRIS</h1>
      <Page setPopup={setPopup} />
    </div>
  );
}

export default App;
