import React from "react";
import CharacterList from "../characters/CharacterList";
function HomeModal() {
  return (
    <div id="modal">
      <CharacterList />
      <button
        onClick={() => {
          if (
            localStorage.getItem("player1") &&
            localStorage.getItem("player2")
          ) {
            window.location.href = "/boardgame";
          }
        }}
      >
        start
      </button>
    </div>
  );
}
export default HomeModal;
