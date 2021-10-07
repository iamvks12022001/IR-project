import React from "react";

function ListItem(props) {
  // console.log("propddd0", props);
  return (
    <span className="site-child">
      {props.value.map((element) => {
        // console.log("ele", element);
        return <span className="digit">{element}</span>;
      })}
      {/* <span className="digit">{props.value}</span>; */}
    </span>
  );
}

export default ListItem;
