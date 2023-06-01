import React, { Component } from "react";
import Character from "./Charcater";
import Controls from "./Controls";
import { connect } from "react-redux";
// import { sort } from "../utils.sort";

class Simpsons extends Component {
  render() {
    const { simpsons, sortType, searchTerm } = this.props;

    let _simpsons = [...simpsons];

    if (searchTerm) {
      _simpsons = _simpsons.filter((item) => {
        return item.character.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
    _simpsons = _simpsons.sort((a, b) => {
      if (sortType === "alphaAZ") {
        return a.character > b.character ? 1 : -1;
      } else if (sortType === "alphaAZ") {
        return b.character > a.character ? 1 : -1;
      }
    });

    return (
      <>
        <Controls />
        {_simpsons.length === 0 && <p>There are no Results!</p>}

        {_simpsons.map((item, index) => {
          return <Character item={item} key={item.id} />;
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    sortType: state.sortType,
    simpsons: state.simpsons,
    searchTerm: state.searchTerm,
  };
}

export default connect(mapStateToProps)(Simpsons);
