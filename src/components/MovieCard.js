import React from "react";

import {
  addFavourites,
  removeFromFavourites,
  handleMovieList,
  showDoc,
} from "../actions";
class MovieCard extends React.Component {
  togglePopup = (movie) => {
    this.props.dispatch(showDoc(movie.Title));
  };

  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourites(movie));
  };
  // dispatch function basically call for change in state....by the function which we pass when we create store i.e movies/
  handleUNFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };
  render() {
    const { movie, isFavourite, isSearched } = this.props;
    // const { DocsStatus } = this.props.docs;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <span>
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/128/1828/1828778.png"
              onClick={() => {
                this.props.dispatch(handleMovieList(movie));
              }}
            />
          </span>
          <div className="title">{movie.Title}</div>
          <span id="isSearched">
            {isSearched ? (
              <button id="green">Searched-Movie</button>
            ) : (
              <button id="red">Recommended</button>
            )}
          </span>
          <div className="plot">{movie.Plot}</div>

          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            <span>
              {console.log("dddddssss", movie.Title)}
              {isSearched && (
                <button
                  id="docs"
                  type="file"
                  onClick={() => this.togglePopup(movie)}
                >
                  Doc
                </button>
              )}
            </span>

            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUNFavouriteClick}
              >
                UN-Favourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
            {/** after pressing a button ahi wala render function again call hoga as state change ho rha ha */}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
