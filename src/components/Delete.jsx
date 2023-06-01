import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_CHARACTER } from "../store/types";

class Delete extends Component {
  render() {
    const { id, dispatch } = this.props;
    return (
      <>
        <div>
          <button
            onClick={() => dispatch({ type: DELETE_CHARACTER, payload: id })}>
            DELETE
          </button>
        </div>
      </>
    );
  }
}

export default connect()(Delete);
