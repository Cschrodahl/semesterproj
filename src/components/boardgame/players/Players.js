import React from "react";
function Players({ playerTurn, border, token }) {
  return (
    <div className={"board__player " + playerTurn + ""}>
      <img
        src={border}
        alt={playerTurn}
        style={{ backgroundImage: " url(" + token + ")" }}
      />
    </div>
  );
}

export default Players;
