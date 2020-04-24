import React from "react";
function Tiles({ index, player1, player2 }) {
  return (
    <div className="board__tile" data-p={index}>
      <span>{index}</span>
      <div>{player1}</div>
      <div>{player2}</div>
    </div>
  );
}
export default Tiles;
