import React from "react";
import "./GameBoard.css";

const Snake = (props) => {
  return (
    <div>
      {props.snakeBody.map((pos, i) => {
        const style = {
          left: `${pos[0]}%`,
          top: `${pos[1]}%`,
        };
        return <div className="SnakeBody" key={i} style={style}></div>;
      })}
    </div>
  );
};

export default Snake;
