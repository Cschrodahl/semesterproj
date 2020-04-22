import React from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
import Players from "./players/Players";
function Board() {
  let player1S = 0;
  const movePlayer = (event, value) => {
    console.log(value);
    player1S += value;
    let tiles = document.querySelectorAll(".board__tile");
    for (let i = tiles.length - 1; i >= 0; i--) {
      if (tiles[i].dataset.p === player1S.toString()) {
        console.log(tiles[i]);
        tiles[i].innerHTML += <Players turn={1} />;
      }
    }
  };
  return (
    <main className="boardContainer">
      <div className="board">
        <div className="board__center">
          <RollDice value={movePlayer} />
        </div>
        <Tiles />
      </div>
    </main>
  );
}
export default Board;
