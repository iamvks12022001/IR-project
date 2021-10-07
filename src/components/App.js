import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import { connect } from "react-redux";
import Document from "./Document";
import List from "./List";
import MovieList from "./MovieList";
console.log("inside App.js file");
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
    console.log("STATE", this.props);
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const { favourites } = movies;

    const index = favourites.indexOf(movie);
    if (index !== -1) {
      console.log("trueeeeeee");
      return true;
    }

    console.log("falseeeee");
    return false;
  };
  isSearched = (movie) => {
    const { movies } = this.props;
    const { searchList } = movies;
    const index = searchList.indexOf(movie);
    if (index !== -1) {
      console.log("trueeeeeee");
      return true;
    }

    console.log("falseeeee");
    return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };
  render() {
    console.log("render");
    const { movies, docs } = this.props;
    const { list, favourites, showFavourites } = movies;
    const { DocStatus } = docs;
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />

        {!DocStatus && (
          <div>
            <div className="boxCC">
              <div className="heading">Posting List</div>
              <List />
            </div>
            <div className="boxCC-m">
              <div className="heading">File List - Keys</div>
              <MovieList />
            </div>

            <div className="main">
              <div className="tabs">
                <div
                  className={`tab ${showFavourites ? "" : " active-tabs"}`}
                  onClick={() => this.onChangeTab(false)}
                >
                  Movies
                </div>
                <div
                  className={`tab ${showFavourites ? " active-tabs" : ""}`}
                  onClick={() => this.onChangeTab(true)}
                >
                  Favourites
                </div>
              </div>

              <div className="list">
                {displayMovies.map((movie, index) => (
                  <MovieCard
                    movie={movie}
                    key={`movies-${index}`}
                    dispatch={this.props.dispatch}
                    isFavourite={this.isMovieFavourite(movie)}
                    isSearched={this.isSearched(movie)}
                  />
                ))}
              </div>

              {displayMovies.length === 0 ? (
                <div className="no-movies">No movies to display!</div>
              ) : null}
            </div>
          </div>
        )}
        {DocStatus && <Document docs={docs} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    docs: state.docs,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
