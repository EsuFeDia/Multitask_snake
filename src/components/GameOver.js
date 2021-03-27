export default function GameOver(props) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={props.gameRestart}>Restart</button>
    </div>
  );
}
