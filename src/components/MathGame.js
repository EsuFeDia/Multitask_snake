import React, { Component } from "react";
import NumberPad from "./NumberPad";
import "./NumPad.css";

export default class MathGame extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
    this.checkSum = this.checkSum.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (e) => {
    e = e || window.event;
    if (e.keyCode >= 96 && e.keyCode <= 105) {
      this.handleClick(e.key);
    } else if (e.keyCode === 8) {
      this.setState({ result: "" });
    } else if (e.keyCode === 13) {
      this.checkSum();
    }
  };
  checkSum() {
    let ans = this.props.num_1 + this.props.num_2;
    let res = parseInt(this.state.result);
    if (res === ans) {
      this.props.correct();
    } else {
      this.props.incorrect();
    }
    this.setState({ result: "" });
  }

  handleClick(item) {
    let res = this.state.result;
    if (item === 0 && res === "") {
      return;
    }
    res = res + item;
    this.setState({ result: res });
  }

  render() {
    let val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
      <div style={{ margin: "10%" }}>
        <h1>
          {this.props.num_1} + {this.props.num_2}
        </h1>
        <div>
          <div className="answer">{this.state.result}</div>
          {val.map((item, i) => (
            <button
              className="box"
              key={i}
              onClick={() => {
                this.handleClick(item);
              }}
            >
              {item}
            </button>
          ))}
          <button className="box" onClick={() => this.setState({ result: "" })}>
            Clear
          </button>
          <button className="box" onClick={() => this.checkSum()}>
            Submit
          </button>
        </div>
        {/* <NumberPad checkSum={this.checkSum} /> */}
      </div>
    );
  }
}
