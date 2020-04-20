import React from "react";
//import Players from "./players/Players";
//import RollDice from "./dice/RollDice";
function Tiles({ data, index, players, pos }) {
  return (
    <div className="board__tile" data-p={data}>
      {index}
      {index == pos ? players : <div></div>}
    </div>
  );
}
export default Tiles;
