import React from "react";
function Tiles({ index, player }) {
  return (
    <div className="board__tile" data-p={index}>
      <span>{index}</span>
      <div>{player}</div>
    </div>
  );
}
export default Tiles;
