import React from "react";
import Character from "./Character";
// import Controls from "./Controls";
const Simpsons = (props) => {
  const { character, onDelete, onLikeToggle } = props;

  return (
    <>
      {character.map((item, id) => {
        return (
          <Character
            item={item}
            key={item.quote}
            onDelete={onDelete}
            onLikeToggle={onLikeToggle}
            character={character}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
