import React, { Component } from "react";
import { connect } from "react-redux";
import { TOGGLE_LIKED } from "../store/types";

class Name extends Component {
  render() {
    const { character } = this.props;
    return (
      <>
        <div>
          <h1>{character}</h1>
        </div>
      </>
    );
  }
}

export default connect()(Name);
