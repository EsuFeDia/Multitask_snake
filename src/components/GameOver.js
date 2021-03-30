/*
Portfolio project By Jake.Z
Author: Jake.Zhang

Function that renders the "Game over" screen
to be better designed to include more functionaility.

*/

export default function GameOver(props) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={props.gameRestart}>Restart</button>
    </div>
  );
}
