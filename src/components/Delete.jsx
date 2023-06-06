import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_CHARACTER, TOGGLE_LIKED } from "../store/types";

class Delete extends Component {
  render() {
    const { id, dispatch, liked } = this.props;
    return (
      <>
        <div>
          <button
            onClick={() => dispatch({ type: DELETE_CHARACTER, payload: id })}>
            DELETE
          </button>
          <button onClick={() => dispatch({ type: TOGGLE_LIKED, payload: id })}>
            <i
              style={{ color: liked ? " red" : " grey" }}
              className="fa-solid fa-heart"></i>
            {/* {liked ? "like" : "not liked"} */}
          </button>
        </div>
      </>
    );
  }
}

export default connect()(Delete);
