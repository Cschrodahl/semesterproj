import React from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
//import Players from "./players/Players";
function Board() {
  const test = (e) => {
    console.log(e);
  };
  return (
    <main className="boardContainer">
      <div className="board">
        <div className="board__center">
          <RollDice value={test} />
        </div>
        <Tiles />
      </div>
    </main>
  );
}
export default Board;
