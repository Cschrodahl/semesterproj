import React from "react";
//import Players from "./players/Players";
//import RollDice from "./dice/RollDice";
function Tiles({ data, index }) {
  return (
    <div className="board__tile" data-p={data}>
      {index}
    </div>
  );
}
export default Tiles;
