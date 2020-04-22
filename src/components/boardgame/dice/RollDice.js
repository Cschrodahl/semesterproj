import React, { useState } from "react";
import Dice from "./Dice";
function RollDice() {
  const [roll, setRoll] = useState(1);

  return (
    <div
      onClick={() => {
        setRoll(roll - roll + Math.floor(Math.random() * 6) + 1);
      }}
      key={roll}
    >
      <Dice roll={roll} canvas={"canvasDice"} />
    </div>
  );
}

export default RollDice;
