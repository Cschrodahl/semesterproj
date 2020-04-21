import React from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
//import Players from "./players/Players";
function Board() {
  let addTiles = [];
  for (let i = 0; i < 24; i++) {
    addTiles.push(
      <Tiles className="board__tile" data={i} key={i} index={i}></Tiles>
    );
  }

  return (
    <main className="boardContainer">
      <div className="board">
        <div className="board__center">
          <RollDice />
        </div>
        {addTiles}
      </div>
    </main>
  );
}
export default Board;
