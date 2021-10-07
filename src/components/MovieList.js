import React, { Component } from "react";
import { filewithindex } from "../actions";

class List extends Component {
  render() {
    return Object.keys(filewithindex).map((key) => {
      return (
        <div className="site">
          <span className="site-child">{filewithindex[key]}</span>
          <span className="digit-1">{key - 1}</span>

          {/* <ListItems temp={key} value={filewithindex[key]} /> */}
        </div>
      );
    });
  }
}

export default List;
