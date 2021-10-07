// {
//     type:'Increase_Count'
// }
// {
//     type:'Decrease_Count'
// }

// {
//     type:'Add Movies'
// }

//action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const REMOVE_FROM_SEARCH_LIST = "REMOVE_FROM_SEARCH_LIST";
export const REMOVE_MOVIE_FROM_LIST = "REMOVE_MOVIE_FROM_LIST";

export const SHOW_DOCS = "SHOW_DOCS";
export const ADD_DATA = "ADD_DATA";
console.log("inside action");
//action creator
export function addMovies(movies) {
  console.log("inside action function");
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie: movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export const arr = {};
export var arrlist = {};
export var filewithindex = {};
export function addMovieSearchResult(movie) {
  console.log("m222=>", movie);
  return {
    type: ADD_SEARCH_RESULT,
    movie: movie,
  };
}
export function handleMovieSearch(movie) {
  console.log("wcww", movie);
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log("respon", response);
        //dispatch an action to add movie in list but for this we need dispatch function
        arr[`${response.Title}`] = movie;

        dispatch(addMovieSearchResult(response));
      })
      .catch((e) => {
        console.log("error", e);
      });

    console.log("mmmmm=>", movie); //yaha pe movie ka mtlb jo argument pass kiya ho function me naki jo api dia ha

    //note upar wala asynchronous function ha isliya then ke andar dispatch likho naki yaha;
  };
}

export function handleMovieSearchfromir(movie) {
  const url = `http://localhost:5000/querry/${movie}`;
  return function (dispatch) {
    fetch(url, {
      method: "POST",
      // mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movie: movie,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("respose", response);
        arrlist = response.arraylist;
        console.log("dedewdewweew", arrlist);
        filewithindex = response.fileIndex;
        for (let key in response.DocIds) {
          const arr = response.DocIds[key].split(".")[0];
          console.log("arr", arr);
          dispatch(handleMovieSearch(arr));
        }
      })
      .catch((error) => {
        console.log("error :", error);
        alert(
          `${error}` +
            "\n\t following problems can happened\n\n" +
            "\t 1. keyword not found \n" +
            "\t2. not use any boolean operators\n" +
            "\t please take a look at a document provided below for more reference\n "
        );
      });
  };
}

export function handleSearchList(movie) {
  return {
    type: REMOVE_FROM_SEARCH_LIST,
    movie,
  };
}
export function handleMovieList(movie) {
  return {
    type: REMOVE_MOVIE_FROM_LIST,
    movie,
  };
}
export function showDoc(title) {
  console.log("eeeeeeeee", title);
  return {
    type: SHOW_DOCS,
    title: title,
  };
}
export function addData(data) {
  return {
    type: ADD_DATA,
    data: data,
  };
}
