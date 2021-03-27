import "./NumPad.css";
import NumPad from "react-numpad";
import React, { useState } from "react";

export default function NumberPad(props) {
  let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const [res, setRes] = useState("");

  function submit() {
    setRes("");
    props.checkSum(res);
  }

  return (
    <>
      <div className="answer">{res}</div>
      <div className="row">
        <button
          className="box"
          onClick={() => {
            setRes(res + 1);
          }}
        >
          1
        </button>
        <button
          className="box"
          onClick={() => {
            setRes(res + 1);
          }}
        >
          2
        </button>
        <button
          className="box"
          onClick={() => {
            setRes(res + 1);
          }}
        >
          3
        </button>
      </div>
      <div className="row">
        <button
          className="box"
          onClick={() => {
            setRes(res + 4);
          }}
        >
          4
        </button>
        <button
          className="box"
          onClick={() => {
            setRes(res + 5);
          }}
        >
          5
        </button>
        <button
          className="box"
          onClick={() => {
            setRes(res + 6);
          }}
        >
          6
        </button>
      </div>
      <div className="row">
        <button
          className="box"
          onClick={() => {
            setRes(res + 7);
          }}
        >
          7
        </button>
        <button
          className="box"
          onClick={() => {
            setRes(res + 8);
          }}
        >
          8
        </button>
        <button
          className="box"
          onClick={() => {
            setRes(res + 9);
          }}
        >
          9
        </button>
      </div>
      <div className="row">
        <button
          className="box"
          onClick={() => {
            if (res === "") {
              return;
            } else {
              setRes(res + 0);
            }
          }}
        >
          0
        </button>
        <button
          className="box"
          onClick={() => {
            setRes("");
          }}
        >
          Clear
        </button>
        <button
          className="box"
          onClick={() => {
            submit();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
