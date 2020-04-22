import React, { useState } from "react";
import Dice from "./Dice";
function RollDice({ value }) {
  const [roll, setRoll] = useState(1);

  return (
    <div
      onClick={(event) => {
        setRoll(roll - roll + Math.floor(Math.random() * 6) + 1);
        return value(event, roll);
      }}
      key={roll}
    >
      <Dice roll={roll} canvas={"canvasDice"} />
    </div>
  );
}

export default RollDice;
