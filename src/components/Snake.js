import React from "react";

const Snake = (props) => {
  return (
    <div>
      {props.snakeBody.map((pos, i) => {
        const style = {
          left: `${pos[0]}%`,
          top: `${pos[1]}%`,
        };
        return <div className="snakeBody" key={i} style={style}></div>;
      })}
    </div>
  );
};

export default Snake;
