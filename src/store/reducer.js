import { initialState } from "./initialSate";
import {
  SET_API_DATA,
  DELETE_CHARACTER,
  TOGGLE_LIKED,
  SET_SORT_ORDER,
} from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    //get Data
    case "SET_API_DATA":
      return { ...state, characters: action.payload };
    //Delete
    case DELETE_CHARACTER: {
      const indexOf = state.characters.findIndex((character) => {
        return character.quote === action.payload;
      });
      const simpsons = [...state.characters];
      simpsons.splice(indexOf, 1);
      return { ...state, characters: simpsons };
    }

    case TOGGLE_LIKED: {
      const index = state.characters.findIndex(
        (character) => character.quote === action.payload
      );
      const updatedCharacters = [...state.characters];

      updatedCharacters[index].liked = !updatedCharacters[index].liked;

      return { ...state, characters: updatedCharacters };
    }
    case SET_SORT_ORDER: {
      return { ...state, sortOrder: action.payload };
    }
    default:
      console.log("reducer started or Invalid reducer type, check your spell");
      return state;
  }
}

// // case SET_API_DATA: {
// //   const _state = { ...state };
// //   _state.characters = action.payload;

// //   return _state;
// // }

// case TOGGLE_LIKED: {
//   const index = state.characters.findIndex(
//     (character) => character.quote === action.payload
//   );
//   console.log("Index:", index);
//   console.log("Characters:", state.characters);

//   if (index === -1) {
//     console.error("Character not found for toggle action:", action.payload);
//     return state;
//   }

//   const updatedCharacters = [...state.characters];
//   updatedCharacters[index].liked = !updatedCharacters[index].liked;

//   return { ...state, characters: updatedCharacters };
// }

// case SET_SEARCH_TERM: {
//   //   return { ...state, searchTerm: payload };
// }
