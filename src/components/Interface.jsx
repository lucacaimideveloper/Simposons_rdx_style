// import React, { Component } from "react";
// import axios from "axios";
// import Loading from "./Loading";
// import Simpsons from "./Simpsons";
// import { connect } from "react-redux";
// import { SET_API_DATA } from "../store/types";

// class Interface extends Component {
//   render() {
//     const { simpsons } = this.props;

//     if (!simpsons) return <Loading />;

//     if (simpsons.lenght === 0) return <p>You deleted everything!</p>;

//     let total = 0;

//     simpsons.forEach((character) => {
//       if (character.liked) total++;
//     });

//     return (
//       <>
//         <h1>Total of liked #{total}</h1>
//         <Simpsons />
//       </>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { simpsons: state.simpsons };
// }

// export default connect(mapStateToProps)(Interface);
