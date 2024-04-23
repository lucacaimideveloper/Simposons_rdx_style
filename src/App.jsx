import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./App.css";
import Data from "./components/Data";

const App = () => {
  const dispatch = useDispatch();
  // const [character, setCharacter] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [sort, setSort] = useState("asc");
  // //
  //
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );
      //send data to the store
      dispatch({ type: "SET_API_DATA", payload: data });
    } catch (err) {
      console.log(err, "something went wrong");
    }
  };
  //
  //can't go above function is definition
  useEffect(() => {
    getData();
  }, []);
  //
  //delete items
  // const onDelete = (quote) => {
  //   const index = character.findIndex((character) => {
  //     return character.quote === quote;
  //   });
  //   const _character = [...character];

  //   _character.splice(index, 1);

  //   setCharacter(_character);
  // };
  // //
  // //const toggle liked
  // const onLikeToggle = (quote) => {
  //   const index = character.findIndex((character) => {
  //     return character.quote === quote;
  //   });
  //   const _character = [...character];

  //   _character[index].liked = !_character[index].liked;

  //   setCharacter(_character);
  // };
  // //
  // //search term by input
  // const onInput = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // //
  // // set sort
  // const onSort = (e) => {
  //   setSort(e.target.value);
  // };
  // //
  // //redner method area
  // //

  // //

  return (
    <>
      <Data getData={getData} />
    </>
  );
};

export default App;
