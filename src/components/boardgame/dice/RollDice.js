import React from "react";
import Dice from "./Dice";
function RollDice() {
  return (
    <div
      onClick={event => {
        console.log(event, "hei");
      }}
    >
      <Dice canvas={"canvasDice"} />
    </div>
  );
}
export default RollDice;
