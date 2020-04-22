import React, { useState, useEffect } from "react";
function Players() {
  const [Player, setPlayer] = useState([]);
  const [currentPlayers, setCurrentPLayers] = useState([]);
  useEffect(() => {
    const getPlayer = { ...localStorage };
    setPlayer(function (value, index = 0) {
      for (let key in getPlayer) {
        value.push({
          player: key,
          name: getPlayer[key],
          position: 1,
          border:
            index === 0
              ? require("../../../img/player1_border-01.png")
              : require("../../../img/player2_border-02.png"),
          color: index === 0 ? "#d60000" : "#0000ff",
        });
        index++;
      }
      return value;
    });

    setCurrentPLayers(Player);
  }, [Player]);
  console.log("rere");
  return (
    <div>
      {currentPlayers.map((players, index) => {
        const { border, player, position } = players;
        console.log(border, player, position);
        return (
          <div
            key={index}
            className={("board__player", player)}
            data-pos={position}
          >
            <img src={border} alt={player} />
            ss
          </div>
        );
      })}
    </div>
  );
}

export default Players;
