import React from "react";

export default function Landing(props) {
  return (
    <div>
      <h1>Multi-tasking Snake! </h1>
      {props.start ? (
        ""
      ) : (
        <>
          <h2>Instructions</h2>
          <p style={{ width: "700px" }}>
            Press the arrow keys to navigate the snake. But beware, you have
            limited amount of direction changes available. The only way to
            obtain moves is to answer the question on the right, with either the
            number pad or by clicking on the virtual number pad underneath the
            question.
          </p>

          <button onClick={props.startGame}>Start Game</button>
        </>
      )}
    </div>
  );
}
