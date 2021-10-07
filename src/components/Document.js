import Popup from "./Popup";
import React, { Component } from "react";
import { connect } from "react-redux";
import { arr, addData } from "../actions";

class Document extends Component {
  componentDidMount() {
    const { docs, dispatch } = this.props;
    const { title } = docs;
    fetch(`${arr[title]}.txt`)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        console.log(data);
        dispatch(addData(data));
      });
  }

  render() {
    const { docs } = this.props;
    const { title, data } = docs;
    console.log("dddddddwwwwwww", this.props);
    console.log("aaaa", arr);
    //  this.fetchfile(title, dispatch);

    console.log("dataaaa", data);
    return (
      <div>
        <Popup
          content={
            <>
              <b>{title}</b>
              {/* <b>{arr}</b> */}
              <p>{data}</p>
              {/* <p id="one">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p> */}
            </>
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    docs: state.docs,
  };
}
const connectedDocumentComponent = connect(mapStateToProps)(Document);
export default connectedDocumentComponent;
