import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Charcater extends Component {
  render() {
    const { character, quote, image, id, liked } = this.props.item;

    return (
      <>
        <div className="characterContainer">
          <Name character={character} id={id} />
          <Quote quote={quote} />
          <Image image={image} />
          <Delete id={id} liked={liked} />
        </div>
      </>
    );
  }
}

export default Charcater;
