import React, { Component } from "react";

class Image extends Component {
  render() {
    const { image, character } = this.props;
    return (
      <>
        <img src={image} alt={character}></img>
      </>
    );
  }
}

export default Image;
