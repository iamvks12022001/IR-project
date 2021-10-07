import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
  REMOVE_FROM_SEARCH_LIST,
  REMOVE_MOVIE_FROM_LIST,
  SHOW_DOCS,
  ADD_DATA,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
  searchList: [],
};
export function movies(state = initialMoviesState, action) {
  // if(action.type===ADD_MOVIES)
  // {
  //     return {
  //         ...state, list:action.movies

  //     };
  // }
  // return state;
  // we can use if else but generally switch case is used
  console.log(action.type, "<->", state, "<->", action); //action me gatbage value jaega
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
        searchList: [action.movie, ...state.searchList],
      };
    case REMOVE_MOVIE_FROM_LIST:
      const filteredList = state.list.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      const filteredFav = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      const filteredSearch = state.searchList.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        list: filteredList,
        favourites: filteredFav,
        searchList: filteredSearch,
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: [],
};

export function search(state = initialSearchState, action) {
  //define search reduces by the action passed here
  //we dont't have any case her now
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      console.log("resdsdds", action.movie);
      return {
        ...state,
        result: [action.movie, ...state.result],
      };

    case REMOVE_FROM_SEARCH_LIST:
      const filteredSearchedArray = state.result.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        result: filteredSearchedArray,
      };
    default:
      return state;
  }
}

const initialDocState = {
  DocStatus: false,
  title: null,
  data: "LOADING.....",
};

export function docs(state = initialDocState, action) {
  switch (action.type) {
    case SHOW_DOCS:
      return {
        ...state,
        DocStatus: !state.DocStatus,
        title: action.title,
      };
    case ADD_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
// const initialRootState={
//     movies:initialMoviesState,
//     search:initialSearchState
//     //user:initialUserState,
//     //similary add all the initial state of all reducers

// }

// export default function rootReducer(state=initialRootState,action)
// {
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//         //user:userReducers(state.userReducer,action)
//         //similarly pass all respective reducers function
//     }
// }

export default combineReducers(
  {
    movies: movies,
    search: search,
    docs: docs,
    //just passing the reference of reducers
  },
  console.log("hii")
);
