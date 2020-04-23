import React from "react";
let player1 = null;
let player2 = null;
function ChooseCharacter(chosenCard) {
  //setting chosen cards and make sure it is only 2 cards that is chosen.
  let nameOfCharacter = chosenCard.currentTarget.dataset.name;
  let characterID = chosenCard.currentTarget.dataset.id;
  if (chosenCard.currentTarget.classList.contains("card__selectedPlayer1")) {
    chosenCard.currentTarget.classList.remove("card__selectedPlayer1");
    player1 = null;
    localStorage.removeItem("player1");
  } else if (
    chosenCard.currentTarget.classList.contains("card__selectedPlayer2")
  ) {
    chosenCard.currentTarget.classList.remove("card__selectedPlayer2");
    player2 = null;
    localStorage.removeItem("player2");
  } else {
    if (player1 !== null && player2 !== null) {
      return;
    }

    if (player1 === null) {
      chosenCard.currentTarget.classList.add("card__selectedPlayer1");
      player1 = nameOfCharacter;
      localStorage.setItem(
        "player1",
        JSON.stringify({
          name: player1,
          token: characterID,
          ID: 0,
        })
      );
    } else {
      chosenCard.currentTarget.classList.add("card__selectedPlayer2");
      player2 = nameOfCharacter;
      localStorage.setItem(
        "player2",
        JSON.stringify({
          name: player2,
          token: characterID,
          ID: 1,
        })
      );
    }
  }
  return (
    <div
      onClick={(event) => {
        chosenCard(event);
      }}
    ></div>
  );
}
export default ChooseCharacter;
