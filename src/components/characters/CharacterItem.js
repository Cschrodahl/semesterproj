import React from "react";
function CharacterItem({ name, gender, culture, image }) {
  return (
    <div className="card__character">
      <div className="card__details">
        <img className="card__token" src={ image)} />
        <p className="card__charName">{name}</p>
        <p className="card__gender">Gender: {gender}</p>
        <p className="card__gender">Culture: {culture}</p>
      </div>
    </div>
  );
}
export default CharacterItem;
