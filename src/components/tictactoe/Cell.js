import React from "react";

const Cell = (props) => {
  return (
    <div className={`game-cell ${props.className}`} onClick={props.onClick}>
      <span>{props.value}</span>
    </div>
  );
};

export default Cell;
