import React, { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import { Character_URL } from "../../constants/api";
import images from "../../constants/image";
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(Character_URL)
      .then(response => response.json())
      .then(result => {
        setCards(function(value) {
          let count = 0;
          for (let key in result) {
            value.push({
              name: result[key].name,
              gender: result[key].gender,
              culture: result[key].culture,
              image: images[count]
            });
            if (key % 2) {
              count += 1;
            }
          }
          return value;
        });
        setCharacters(cards);
      })
      .catch(error => console.log(error));
  }, []);
  console.log(cards);
  return (
    <div className="card">
      {characters.map((char, index) => {
        const { name, gender, culture, image } = char;
        return (
          <div sm={6} md={3} key={index}>
            <CharacterItem
              name={name}
              gender={gender}
              culture={culture}
              image={image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
