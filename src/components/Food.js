import React from "react";

const Food = (props) => {
  const style = {
    left: `${props.foodCoord[0]}%`,
    top: `${props.foodCoord[1]}%`,
  };

  //return <div className="snakeBody" key={i} style={style}></div>;
  return <div className="food" style={style}></div>;
};

export default Food;
