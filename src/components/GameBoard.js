import React, { Component } from "react";
import "./GameBoard.css";
import Snake from "./Snake";
import Food from "./Food";
import GameOver from "./GameOver.js";
import MathGame from "./MathGame";

const getRandCoord = () => {
  let x = Math.floor(Math.random() * Math.floor(98 / 2)) * 2;
  let y = Math.floor(Math.random() * Math.floor(98 / 2)) * 2;
  return [x, y];
};

// const getRandomNumber = () => {
//   let x = Math.floor(Math.random() * Math.floor(98 / 2)) * 2;
//   return x;
// };
const getRandomNumber = () => {
  let x = Math.floor(Math.random() * Math.floor(8 / 2)) * 2;
  return x;
};

let initialState = {
  difficulityIncrement: 5,
  speed: 150,
  width: 500,
  height: 500,
  direction: "RIGHT",
  gameState: true,
  snakeBody: [[12, 48]],
  foodCoord: getRandCoord(),
  stopKey: false,
  allowedMoves: 50,
  paused: false,
  score: 0,
  num_1: getRandomNumber(),
  num_2: getRandomNumber(),
};

export default class GameBoard extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.gameRestart = this.gameRestart.bind(this);
    this.correct = this.correct.bind(this);
    this.incorrect = this.incorrect.bind(this);
    this.decreaseMove = this.decreaseMove.bind(this);
    this.resetQuestion = this.resetQuestion.bind(this);
    this.increaseDifficulity = this.increaseDifficulity.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
    this.coreLoop();
  }

  coreLoop() {
    setTimeout(() => {
      if (this.state.gameState && !this.state.paused) {
        this.snakeMove();
        this.boundCheck();
        this.bodyCheck();
        this.foodCheck();
        this.setState({ stopKey: false });
      }
      this.coreLoop();
    }, this.state.speed);
  }

  decreaseMove() {
    if (this.state.allowedMoves === 0) {
      return;
    }
    this.setState({
      allowedMoves: this.state.allowedMoves - 1,
    });
  }

  snakeMove = () => {
    let body = [...this.state.snakeBody];
    let head = body[body.length - 1];
    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      default:
    }
    body.push(head);
    body.shift();
    this.setState({
      snakeBody: body,
    });
  };

  onKeyDown = (e) => {
    if (
      this.state.stopKey ||
      this.state.allowedMoves <= 0 ||
      this.state.paused === true
    ) {
      return;
    }
    e = e || window.event;
    switch (e.keyCode) {
      case 38: //Up
      case 87: //W
        if (this.state.direction === "DOWN" || this.state.direction === "UP") {
          break;
        }
        this.setState({ direction: "UP" });
        this.decreaseMove();
        this.stopKey();
        break;
      case 40: //Down
      case 83: //S
        if (this.state.direction === "DOWN" || this.state.direction === "UP") {
          break;
        }
        this.setState({ direction: "DOWN" });
        this.decreaseMove();
        this.stopKey();
        break;
      case 37: //Left
      case 65: //A
        if (
          this.state.direction === "RIGHT" ||
          this.state.direction === "LEFT"
        ) {
          break;
        }
        this.setState({ direction: "LEFT" });
        this.decreaseMove();
        this.stopKey();
        break;
      case 39: //Right
      case 68: //Right
        if (
          this.state.direction === "RIGHT" ||
          this.state.direction === "LEFT"
        ) {
          break;
        }
        this.setState({ direction: "RIGHT" });
        this.decreaseMove();
        this.stopKey();
        break;
      default:
    }
  };
  stopKey() {
    this.setState({
      stopKey: true,
    });
  }
  foodCheck() {
    let head = this.state.snakeBody[this.state.snakeBody.length - 1];
    let food = this.state.foodCoord;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.eatFood();
    }
  }

  increaseDifficulity() {
    this.setState({
      speed: this.state.speed - this.state.difficulityIncrement,
    });
    console.log(this.state.speed);
  }

  eatFood() {
    console.log("food eaten");
    let snake = [...this.state.snakeBody];
    snake.unshift([]);
    this.increaseDifficulity();
    this.setState({
      snakeBody: snake,
      foodCoord: getRandCoord(),
    });
  }

  boundCheck() {
    let head = this.state.snakeBody[this.state.snakeBody.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.gameOver();
    }
  }

  bodyCheck() {
    let body = [...this.state.snakeBody];
    let head = body[body.length - 1];
    body.pop();
    body.forEach((spot) => {
      if (head[0] === spot[0] && head[1] === spot[1]) {
        this.gameOver();
      }
    });
  }

  gameOver() {
    this.setState({ gameState: false });
  }

  gameRestart() {
    //console.log(initialState);
    this.setState(initialState);
  }

  correct() {
    console.log(this.state.snakeBody.length);
    this.setState({
      allowedMoves: this.state.allowedMoves + 1,
      score: this.state.score + this.state.snakeBody.length,
    });
    this.resetQuestion();
  }
  incorrect() {
    this.decreaseMove();
    this.resetQuestion();
  }

  resetQuestion() {
    this.setState({
      num_1: getRandomNumber(),
      num_2: getRandomNumber(),
    });
  }

  render() {
    return (
      <>
        {this.props.start ? (
          <div className="Wrapper">
            {this.state.gameState ? (
              <div className="Wrapper">
                <h1>Allowed Movements = {this.state.allowedMoves}</h1>
                <button
                  onClick={() => {
                    if (this.state.paused === true) {
                      this.resetQuestion();
                    }
                    this.setState({ paused: !this.state.paused });
                  }}
                >
                  {!this.state.paused ? "Pause" : "Resume"}
                </button>
                <div style={{ minHeight: "5px" }}></div>
                <div
                  style={{
                    display: "table-row",
                  }}
                >
                  <div
                    className="SnakeBoard "
                    style={{
                      width: this.state.width,
                      height: this.state.height,
                    }}
                  >
                    <span className="info">
                      Allowed Movements = {this.state.allowedMoves}
                    </span>
                    <br />
                    {this.state.paused ? (
                      ""
                    ) : (
                      <span className="info">
                        Question is: {this.state.num_1} + {this.state.num_2}
                      </span>
                    )}
                    <Snake snakeBody={this.state.snakeBody} />
                    <Food foodCoord={this.state.foodCoord} />
                  </div>
                  <div
                    className="MathBoard "
                    style={{
                      width: 300,
                      height: this.state.height,
                    }}
                  >
                    <MathGame
                      paused={this.state.paused}
                      correct={this.correct}
                      incorrect={this.incorrect}
                      num_1={this.state.num_1}
                      num_2={this.state.num_2}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <GameOver gameRestart={this.gameRestart} />
                <p> Your Score : </p>
                {this.state.score}
              </div>
            )}
          </div>
        ) : (
          <div />
        )}
      </>
    );
  }
}
