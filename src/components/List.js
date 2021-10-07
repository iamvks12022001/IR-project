import React, { Component } from "react";
import { arrlist } from "../actions";
import ListItems from "./ListItem";
class List extends Component {
  render() {
    return Object.keys(arrlist).map((key) => {
      // console.log("key====", key);

      return (
        <div className="site">
          <span className="site-child">{key}</span>

          <ListItems temp={key} value={arrlist[key]} />
        </div>
      );
    });
  }
}

export default List;
