import "./App.css";
import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Landing from "./components/Landing";

function App() {
  const [start, setStart] = useState(false);
  return (
    <>
      <Landing start={start} startGame={() => setStart(true)} />
      {start ? <GameBoard start={start} /> : ""}
    </>
  );
}

export default App;
