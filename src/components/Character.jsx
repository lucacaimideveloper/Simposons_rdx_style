import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

const Character = (props) => {
  // const characters = useSelector((state) => state.characters);

  // const { characters } = props;
  const dispatch = useDispatch();

  return props.characters.map((item) => {
    return (
      <div className="charcaterContainer" key={item.quote}>
        <Card
          item={item}
          liked={item.liked}
          name={item.name}
          quote={item.quote}
          image={item.image}
          characterDirection={item.characterDirection}
        />
      </div>
    );
  });
};
export default Character;
