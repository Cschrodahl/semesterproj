import React from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
import Players from "./players/Players";
function Board() {
  let addTiles = [];
  let player1Score = 3;

  for (let i = 0; i < 24; i++) {
    addTiles.push(
      <Tiles key={i} index={i}>
        {player1Score === i ? <Players /> : null}
      </Tiles>
    );
  }
  console.log(addTiles);
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
