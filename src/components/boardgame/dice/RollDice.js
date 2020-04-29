import React, { useState } from "react";
import Dice from "./Dice";
function RollDice({ rolled }) {
  const [roll, setRoll] = useState(1);

  return (
    <div
      className="board__dice"
      onClick={(event) => {
        let newRoll = roll - roll + Math.floor(Math.random() * 6) + 1;
        setRoll(newRoll);
        return rolled(event, newRoll);
      }}
      key={roll}
    >
      <Dice roll={roll} canvas={"canvasDice"} />
    </div>
  );
}

export default RollDice;
