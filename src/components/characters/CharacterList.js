import React, { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import { Character_URL } from "../../constants/api";
import Tokens from "../../constants/Tokens";
import ChooseCharacter from "./ChooseCharacter";
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(Character_URL)
      .then((response) => response.json())
      .then((result) => {
        setCards(function (value) {
          let count = 0;
          for (let key in result) {
            value.push({
              name: result[key].name,
              gender: result[key].gender,
              culture: result[key].culture,
              image: Tokens[count],
              id: "0" + count,
            });
            if (key % 2) {
              count += 1;
            }
          }
          return value;
        });
        setCharacters(cards);
      })
      .catch((error) => console.log(error));
  }, [cards]);

  return (
    <div className="card">
      {characters.map((char, index) => {
        const { name, gender, culture, image, id } = char;
        return (
          <CharacterItem
            name={name}
            gender={gender}
            culture={culture}
            image={image}
            key={index}
            ID={id}
            choose={ChooseCharacter}
          />
        );
      })}
    </div>
  );
}

export default CharacterList;
