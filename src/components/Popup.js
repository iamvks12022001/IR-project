import React from "react";
import { connect } from "react-redux";
import { showDoc } from "../actions";
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span
          className="close-icon"
          onClick={() => {
            props.dispatch(showDoc(null));
          }}
        >
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    docs: state.docs,
  };
}
const connectedPopupComponent = connect(mapStateToProps)(Popup);
export default connectedPopupComponent;
