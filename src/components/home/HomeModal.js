import React from "react";
import CharacterList from "../characters/CharacterList";
function HomeModal() {
  return (
    <>
      <button
        onClick={() => {
          document.getElementById("modal").style.display = "block";
        }}
      ></button>
      <div id="modal">
        <CharacterList />
      </div>
    </>
  );
}
export default HomeModal;
