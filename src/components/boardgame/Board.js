import React, { useState, useEffect } from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
import Players from "./players/Players";

//Setting the players turn
let currentPlayerTurn = 0;

function Board() {
  let addTiles = [];
  const [currentPlayer, setCurrentPlayer] = useState([]);
  const [currentScorePlayer1, setCurrentScorePlayer1] = useState(0);
  const [currentScorePlayer2, setCurrentScorePlayer2] = useState(0);
  const [trapMessage, setTrapMessage] = useState("");

  //Player traps
  const traps = [
    {
      trapPosition: 7,
      goBackTo: 4,
      Message: " Hit a trap, and must go back 3 steps",
    },
    {
      trapPosition: 12,
      goBackTo: 9,
      Message: " Hit a trap, and must go back 3 steps",
    },
    {
      trapPosition: 17,
      goBackTo: 14,
      Message: " Hit a trap, and must go back 3 steps",
    },
    {
      trapPosition: 22,
      goBackTo: 18,
      Message: " Hits a trap, and must go back 4 steps",
    },
  ];
  useEffect(() => {
    const getPlayer = { ...localStorage };
    const players = [];
    for (let key in getPlayer) {
      const { name, ID, token } = JSON.parse(getPlayer[key]);
      players.push({
        player: name,
        image:
          ID === 0
            ? require("../../img/player1_border-01.png")
            : require("../../img/player2_border-02.png"),
        Score: 0,
        token: require("../../img/tokens/token-" + token + ".png"),
        players: ID === 0 ? "Player1" : "Player2",
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

    //When a player wins
    if (currentPlayer[currentPlayerTurn].Score >= 24) {
      localStorage.clear();
      localStorage.setItem(
        "winner",
        JSON.stringify(currentPlayer[currentPlayerTurn])
      );
      window.location.href = "/endgame";
    }
    const setTrap = traps.find(
      ({ trapPosition }) =>
        trapPosition === currentPlayer[currentPlayerTurn].Score
    );
    //creating the message when a player rolles
    let message = "";
    if (setTrap) {
      currentPlayer[currentPlayerTurn].Score = setTrap.goBackTo;
      message = `Player${currentPlayerTurn + 1}: ${
        currentPlayer[currentPlayerTurn].player
      } ${setTrap.Message}`;
    } else {
      message = `Player${
        currentPlayerTurn + 1
      } rolled a ${rolled}, move foward ${rolled} spaces`;
    }
    setTrapMessage(message);
    if (currentPlayerTurn === 0) {
      setCurrentScorePlayer1(currentPlayer[currentPlayerTurn].Score);
    } else {
      setCurrentScorePlayer2(currentPlayer[currentPlayerTurn].Score);
    }
    //Toggle player turn
    currentPlayerTurn++;
    if (currentPlayerTurn >= 2) {
      currentPlayerTurn = 0;
    }

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
          const TrapTiles = traps.find(
            ({ trapPosition }) => trapPosition === i
          );
          return (
            <Tiles
              trap={TrapTiles ? "board__punish" : ""}
              key={i}
              index={i}
              player1={
                currentScorePlayer1 === i ? (
                  <Players
                    border={currentPlayer[0].image}
                    playerTurn={currentPlayer[0].player}
                    token={currentPlayer[0].token}
                  />
                ) : null
              }
              player2={
                currentScorePlayer2 === i ? (
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
          <div className="board__playerMessage">{trapMessage}</div>
        </div>
      </div>
    </main>
  );
}
export default Board;
