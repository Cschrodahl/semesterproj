import React from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
import Players from "./players/Players";
//import Spiller from "./players/p1";
function Board() {
  let addTiles = [];
  let player1Score = 3;

  for (let i = 0; i < 24; i++) {
    addTiles.push(i);
  }
  const playerTurn = (event, value) => {
    console.log(value);
    player1Score = value;
    return <Tiles player={value} />;
  };
  return (
    <main className="boardContainer">
      <div className="board">
        <div className="board__center">
          <RollDice value={playerTurn} />
        </div>
        {addTiles.map((i) => {
          return (
            <Tiles
              key={i}
              index={i}
              player={player1Score === i ? <Players /> : null}
            />
          );
        })}
      </div>
    </main>
  );
}
export default Board;
