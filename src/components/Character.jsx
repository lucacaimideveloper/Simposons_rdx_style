import React from "react";

// import Delete from "./Delete";

const Character = (props) => {
  const { character, item, onLikeToggle, onDelete } = props;

  return (
    <>
      <div className="characterContainer">
        <h1>{item.character}</h1>
        <p>{item.quote} </p>
        <div
          className={"item.characterDirection" === "Right" ? "right" : "left"}>
          <img src={item.image} alt={item.character} />
        </div>
        <div>
          <button onClick={() => onDelete(item.quote)}>DELETE</button>
          <button onClick={() => onLikeToggle(item.quote)}>
            <i
              style={{ color: item.liked ? " red" : "white" }}
              className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Character;
