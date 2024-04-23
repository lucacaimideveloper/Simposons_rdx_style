import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Character from "./Character";
import Loading from "./Loading";

const Simpsons = (props) => {
  const dispatch = useDispatch();
  //
  const sortOrder = useSelector((state) => state.sortOrder);
  const characters = useSelector((state) => state.characters);
  //
  const [searchTerm, setSearchTerm] = useState("");
  //
  const { getData } = props;

  if (!characters) {
    return <Loading />;
  }
  //calculate total
  let total = 0;
  characters.forEach((character) => {
    if (character.liked) total += 1;
  });
  //
  //filtering over characters
  const filtered = characters.filter((character) => {
    return character.character
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });
  //
  //calculate total likes

  //
  //sort of
  // let sortFilter = [...filtered];
  //
  //logic for asc/dsc
  if (sortOrder && sortOrder === "asc") {
    filtered.sort((a, b) => {
      if (a.character > b.character) return 1;
      if (a.character < b.character) return -1;
      return 0;
    });
  } else if (sortOrder) {
    filtered.sort((a, b) => {
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
        <input
          id="filter"
          type="text"
          onInput={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <label htmlFor="sort">Sort</label>
        <select
          id="sort"
          onChange={(e) =>
            dispatch({ type: "SET_SORT_ORDER", payload: e.target.value })
          }>
          <option value="asc">ASC</option>
          <option value="desc">DSC</option>
        </select>
      </div>
      <Character characters={filtered} />
    </>
  );
};

export default Simpsons;
