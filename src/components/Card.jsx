import React from "react";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const dispatch = useDispatch();

  const { name, quote, image, characterDirection, item, liked } = props;

  return (
    <>
      <div className="characterContainer">
        <h1>{item.character}</h1>
        <p>{item.quote} </p>
        <div
          className={"item.characterDirection" === "Right" ? "right" : "left"}>
          <img src={item.image} alt={item.name} />
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "DELETE_CHARACTER", payload: quote });
            }}>
            DELETE
          </button>
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_LIKED", payload: quote });
            }}>
            <i
              style={{ color: item.liked ? " red" : "white" }}
              className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
