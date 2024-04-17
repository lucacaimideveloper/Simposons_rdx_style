import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
// import Simpsons from "./components/Simpsons  ";
import "./App.css";
import Data from "./components/Data";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("asc");
  //
  //
  const getData = async () => {
    try {
      const results = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );
      setCharacter(results.data);
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
  const onDelete = (quote) => {
    const index = character.findIndex((character) => {
      return character.quote === quote;
    });
    const _character = [...character];

    _character.splice(index, 1);

    setCharacter(_character);
  };
  //
  //const toggle liked
  const onLikeToggle = (quote) => {
    const index = character.findIndex((character) => {
      return character.quote === quote;
    });
    const _character = [...character];

    _character[index].liked = !_character[index].liked;

    setCharacter(_character);
  };
  //
  //search term by input
  const onInput = (e) => {
    setSearchTerm(e.target.value);
  };
  //
  // set sort
  const onSort = (e) => {
    setSort(e.target.value);
  };
  //
  //redner method area
  //
  //if no data
  if (!character) return <Loading />;
  //
  //filtering over characters
  const filtered = character.filter((character) => {
    return character.character
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });
  //
  //calculate total likes
  let total = 0;
  character.forEach((character) => {
    if (character.liked) total += 1;
  });
  //
  //sort of
  let sortFilter = [...filtered];
  //
  //logic for asc/dsc
  if (sort && sort === "asc") {
    sortFilter.sort((a, b) => {
      if (a.character > b.character) return 1;
      if (a.character < b.character) return -1;
      return 0;
    });
  } else if (sort) {
    sortFilter.sort((a, b) => {
      if (a.character > b.character) return -1;
      if (a.character < b.character) return 1;
      return 0;
    });
  }

  return (
    <>
      <div>
        <h1>Total of liked: {total}</h1>
        <button onClick={getData}>Get new data</button>
        <label htmlFor="filter">Filter:</label>
        <input id="filter" type="text" onChange={onInput} />
        <label htmlFor="sort">Sort</label>
        <select id="sort" onChange={onSort}>
          <option value="asc">ASC</option>
          <option value="desc">DSC</option>
        </select>
      </div>
      <Data
        character={sortFilter}
        onDelete={onDelete}
        onLikeToggle={onLikeToggle}
      />
    </>
  );
};

export default App;
