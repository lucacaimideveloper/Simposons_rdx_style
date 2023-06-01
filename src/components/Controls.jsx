import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_SORT_TYPE, SET_SEARCH_TERM } from "../store/types";
class Controls extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <>
        <select
          onChange={(e) => {
            dispatch({
              type: SET_SORT_TYPE,
              payload: e.target.value,
            });
          }}>
          <option value="alphaAZ">AZ</option>
          <option value="alphaZA">ZA</option>
          <option value=""></option>
        </select>
        <input
          type="text"
          onInput={(e) => {
            dispatch({
              type: SET_SEARCH_TERM,
              payload: e.target.value,
            });
          }}></input>
      </>
    );
  }
}

export default connect()(Controls);
