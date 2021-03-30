/*
Portfolio project By Jake.Z
Author: Jake.Zhang

Function that renders the "HOME" page
to be better designed to include more functionaility.
or potentially uses router to redirect pages to achieve similar results.

*/

import React from "react";
import "../App.css";

export default function Landing(props) {
  return (
    <div className="Landing">
      <h1>Multi-tasking Snake! </h1>
      {props.start ? (
        ""
      ) : (
        <>
          <h2>Instructions</h2>

          <p>
            Press the arrow keys or WASD to navigate the snake. But beware, you
            have limited amount of direction changes available.
          </p>
          <p>
            The only way to obtain moves is to answer the question on the right
          </p>
          <p>
            To enter an answer, you can either use the number pad on your
            keyboard or by clicking on the virtual number pad underneath the
            question.
          </p>

          <button onClick={props.startGame}>Start Game</button>
        </>
      )}
    </div>
  );
}
