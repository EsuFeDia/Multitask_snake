/*
Portfolio project By Jake.Z
Author: Jake.Zhang

Basic function that renders the food objection on board.

*/
import React from "react";
import "./GameBoard.css";

const Food = (props) => {
  const style = {
    left: `${props.foodCoord[0]}%`,
    top: `${props.foodCoord[1]}%`,
  };

  return <div className="Food" style={style}></div>;
};

export default Food;
