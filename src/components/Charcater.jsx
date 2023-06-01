import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Charcater extends Component {
  render() {
    const { character, quote, image, id, characterDirection, liked } =
      this.props.item;

    return (
      <>
        <div className="characterContainer">
          <Name character={character} id={id} liked={liked} />
          <Quote quote={quote} />
          <Image image={image} />
          <Delete id={id} />
        </div>
      </>
    );
  }
}

export default Charcater;
