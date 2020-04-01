import React from "react";
import Tiles from "./Tiles";
import Dice from "./Dice";
function Board() {
  let addTiles = [];
  for (let i = 0; i < 24; i++) {
    addTiles.push(<Tiles className="board__tile" data={i} key={i} index={i} />);
  }
  return (
    <main className="boardContainer">
      <div className="board">
        <div className="board__center">
          <Dice />
        </div>
        {addTiles}
      </div>
    </main>
  );
}
export default Board;
