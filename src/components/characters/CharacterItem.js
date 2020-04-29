import React from "react";
function CharacterItem({ name, gender, culture, image, choose, ID, card }) {
  return (
    <div
      className="card__character"
      onClick={choose}
      data-name={name}
      data-id={ID}
      style={{ backgroundImage: `url(${card})` }}
    >
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
