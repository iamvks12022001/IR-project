import React from "react";
import { connect } from "react-redux";
import {
  addMovieToList,
  handleSearchList,
  handleMovieSearchfromir,
} from "../actions";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.props.dispatch(handleSearchList(movie));
  };

  handleSearch = (result) => {
    const { searchText } = this.state;
    if (result.length !== 0) {
      result.forEach((element) => {
        this.props.dispatch(handleSearchList(element));
      });
    }

    // this.props.dispatch(handleMovieSearch(searchText));
    this.props.dispatch(handleMovieSearchfromir(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { result } = this.props.search;

    return (
      <div>
        <div className="nav">
          <div className="search-container">
            <input onChange={(e) => this.handleChange(e)} />
            {(() => {
              if (this.state.searchText === "" && result.length !== 0) {
                result.forEach((element) => {
                  this.props.dispatch(handleSearchList(element));
                });
              }
            })()}
            <button id="search-btn" onClick={() => this.handleSearch(result)}>
              Search
            </button>
          </div>
        </div>
        <div>
          {result.map((res, index) => {
            return (
              <div key={index}>
                <div className="search-results">
                  <img
                    alt="increase"
                    className="action-icons-search"
                    src="https://image.flaticon.com/icons/png/128/1828/1828778.png"
                    onClick={() => {
                      this.props.dispatch(handleSearchList(res));
                    }}
                  />

                  <div className="search-result">
                    <img src={res.Poster} alt="search-pic" />
                    <div className="movie-info">
                      <span>{res.Title}</span>
                      <div> vScore : {res.imdbRating * 100}</div>
                      <button onClick={() => this.handleAddToMovies(res)}>
                        Add to Movies
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);
