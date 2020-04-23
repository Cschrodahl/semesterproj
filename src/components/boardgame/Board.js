import React, { useState, useEffect } from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
import Players from "./players/Players";
let currentPlayerTurn = 1;
function Board() {
  let addTiles = [];
  //const [PlayerPosition, setPlayerPosition] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState([]);
  const [currentScore, setCUrrentPlayerScore] = useState(0);
  useEffect(() => {
    const getPlayer = { ...localStorage };
    const players = [];
    for (let key in getPlayer) {
      const { name, ID, token } = JSON.parse(getPlayer[key]);
      console.log(name);
      players.push({
        player: name,
        image:
          ID === 0
            ? require("../../img/player1_border-01.png")
            : require("../../img/player2_border-02.png"),
        Score: 0,
        token: require("../../img/tokens/token-" + token + ".png"),
      });
    }

    setCurrentPlayer(players);
  }, []);
  //console.log(currentPlayer);
  for (let i = 1; i < 25; i++) {
    addTiles.push(i);
  }
  const playerTurn = (event, value) => {
    currentPlayer[currentPlayerTurn].Score += value;
    if (currentPlayer[currentPlayerTurn].Score === 10) {
      currentPlayer[currentPlayerTurn].Score = 1;
      console.log("go back to square 1");
    }
    setCUrrentPlayerScore(currentPlayer[currentPlayerTurn].Score);
    currentPlayerTurn++;
    if (currentPlayerTurn >= 2) {
      currentPlayerTurn = 0;
    }
    //console.log(currentPlayerTurn);
    return <Tiles player={currentPlayer[currentPlayerTurn].Score} />;
  };
  console.log(currentPlayer[currentPlayerTurn]);
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
              player={
                currentScore === i ? (
                  <Players
                    border={currentPlayer[currentPlayerTurn].image}
                    playerTurn={currentPlayer[currentPlayerTurn].player}
                    token={currentPlayer[currentPlayerTurn].token}
                  />
                ) : null
              }
            />
          );
        })}
      </div>
    </main>
  );
}
export default Board;
