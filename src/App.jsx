import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import { connect } from "react-redux";
import { SET_API_DATA } from "./store/types";

class App extends Component {
  async componentDidMount() {
    const { data } = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    console.log(data, "hi");
    //unique ID
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });

    this.props.dispatch({ type: SET_API_DATA, payload: data });
  }

  render() {
    const { simpsons } = this.props;

    if (!simpsons) return <Loading />;

    if (simpsons.length === 0) return <p>You deleted everything!</p>;

    let total = 0;

    simpsons.forEach((character) => {
      if (character.liked) total++;
    });

    return (
      <>
        <h1>Total of liked #{total}</h1>
        <Simpsons />;
      </>
    );
  }
}

function mapStateToProps(state) {
  return { simpsons: state.simpsons };
}

export default connect(mapStateToProps)(App);
