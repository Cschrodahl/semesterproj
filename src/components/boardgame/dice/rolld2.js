import React, { useState } from "react";
import Dice from "./Dice";
import Players from "./../players/Players";
//import Tiles from "./../Tiles";
let currentPlayerTurn = 0;
let player = { player1: 0, player2: 0 };
function RollDice(props) {
  let tile = document.querySelectorAll(".board__tile");
  const [roll, setRoll] = useState(1);
  let play = [];
  play.push(Players.call().props.children);
  let currentPlayer = play[0][currentPlayerTurn];
  if (currentPlayer) {
    if (tile) {
      for (let i = tile.length - 1; i >= 0; i--) {
        if (
          tile[i].dataset.p === player[currentPlayer.props.className].toString()
        ) {
          tile[i].innerHTML += <Players />;
        }
      }
    }
  }
  return (
    <div
      onClick={() => {
        setRoll(roll - roll + Math.floor(Math.random() * 6) + 1);
        currentPlayerTurn++;
        if (currentPlayerTurn >= play[0].length) {
          currentPlayerTurn = 0;
        }

        player[currentPlayer.props.className] += roll;
      }}
      key={roll}
    >
      <Dice roll={roll} canvas={"canvasDice"} />
    </div>
  );
}

export default RollDice;
