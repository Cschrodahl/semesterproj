import React from "react";
function CharacterItem({ name, gender, culture, image, choose }) {
  return (
    <div className="card__character" onClick={choose} data-name={name}>
      <div className="card__details">
        <img className="card__token" src={image} alt={name} />
        <p className="card__charName">{name}</p>
        <p className="card__gender">Gender: {gender}</p>
        <p className="card__gender">Culture: {culture}</p>
      </div>
    </div>
  );
}
export default CharacterItem;
