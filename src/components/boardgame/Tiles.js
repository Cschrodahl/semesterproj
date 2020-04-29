import React from "react";
function Tiles({ index, player1, player2, trap }) {
  return (
    <div className={"board__tile " + trap} data-p={index}>
      <span>{index}</span>
      <>{player1}</>
      <>{player2}</>
    </div>
  );
}
export default Tiles;
