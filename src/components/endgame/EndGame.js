import React from "react";
import Heading from "./Heading";
import Outtro from "./Outtro";
function EndGame() {
  const getPlayer = { ...localStorage };
  const setWinner = JSON.parse(getPlayer.winner);
  console.log(setWinner);
  return (
    <main className="container">
      <Heading
        Header1="Congratulations"
        player={setWinner.players}
        Header2="You won!"
        Logo={require("../../img/logo-03.png")}
        OutroText={<Outtro />}
        restart="PLAY AGAIN"
      />
    </main>
  );
}

export default EndGame;
