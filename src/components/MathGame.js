/*
Portfolio project By Jake.Z
Author: Jake.Zhang

Class that is responsible for rendering and creating functionaility for the math game.


*/

import React, { Component } from "react";
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
    //console.log(e.keyCode);
    if (this.props.paused) {
      return;
    }
    e = e || window.event;
    if (e.keyCode >= 96 && e.keyCode <= 105) {
      this.handleClick(e.key);
    } else if (e.keyCode === 8) {
      this.setState({ result: "" });
    } else if (e.keyCode === 32 || e.keyCode === 13) {
      console.log("space pressed");
      this.checkSum();
    }
  };
  checkSum() {
    let ans = this.props.num_1 + this.props.num_2;
    let res = parseInt(this.state.result);
    console.log(ans);
    console.log(res);
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
      <>
        {this.props.paused ? (
          <>
            <span className="info"> Dont Cheat! </span>
          </>
        ) : (
          <div style={{ margin: "10%" }}>
            <h1 className="answer info">
              {this.props.num_1} + {this.props.num_2}
            </h1>
            <div>
              <div className="answer info">{this.state.result}</div>
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
              <button
                className="box"
                onClick={() => this.setState({ result: "" })}
              >
                Clear
              </button>
              <button className="box" onClick={() => this.checkSum()}>
                Submit
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
