import React, { useState, useEffect } from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
import Players from "./players/Players";

//Setting the players turn
let currentPlayerTurn = 0;

function Board() {
  let addTiles = [];
  const [currentPlayer, setCurrentPlayer] = useState([]);
  const [currentScore, setCurrentPlayerScore] = useState(0);
  const [currentScore1, setCurrentPlayerScore1] = useState(0);

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
  //Creating tiles index
  for (let i = 1; i < 25; i++) {
    addTiles.push(i);
  }

  const playerTurn = (event, rolled) => {
    currentPlayer[currentPlayerTurn].Score += rolled;
    if (currentPlayer[currentPlayerTurn].Score === 10) {
      currentPlayer[currentPlayerTurn].Score = 1;
      console.log("go back to square 1");
    }
    if (currentPlayerTurn === 0) {
      setCurrentPlayerScore(currentPlayer[currentPlayerTurn].Score);
    } else {
      setCurrentPlayerScore1(currentPlayer[currentPlayerTurn].Score);
    }
    //Toggle player turn
    currentPlayerTurn++;
    if (currentPlayerTurn >= 2) {
      currentPlayerTurn = 0;
    }
    console.log(
      currentPlayer[currentPlayerTurn].player,
      currentPlayer[currentPlayerTurn].Score
    );
    //updating player position
    return (
      <Tiles
        player1={currentPlayer[0].Score}
        player2={currentPlayer[1].Score}
      />
    );
  };
  return (
    <main className="boardContainer">
      <div className="board">
        {addTiles.map((i) => {
          return (
            <Tiles
              key={i}
              index={i}
              player1={
                currentScore === i ? (
                  <Players
                    border={currentPlayer[0].image}
                    playerTurn={currentPlayer[0].player}
                    token={currentPlayer[0].token}
                  />
                ) : null
              }
              player2={
                currentScore1 === i ? (
                  <Players
                    border={currentPlayer[1].image}
                    playerTurn={currentPlayer[1].player}
                    token={currentPlayer[1].token}
                  />
                ) : null
              }
            />
          );
        })}
        <div className="board__center">
          <RollDice rolled={playerTurn} />
        </div>
      </div>
    </main>
  );
}
export default Board;
/** <Tiles
              key={i}
              index={i}
              player1={
                currentScore === i ? (
                  <Players
                    border={currentPlayer[0].image}
                    playerTurn={currentPlayer[0].player}
                    token={currentPlayer[0].token}
                  />
                ) : null
              }
              player2={
                currentScore1 === i ? (
                  <Players
                    border={currentPlayer[1].image}
                    playerTurn={currentPlayer[1].player}
                    token={currentPlayer[1].token}
                  />
                ) : null
              }
            />
          );
        })} */
