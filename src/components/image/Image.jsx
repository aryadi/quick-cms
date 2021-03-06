import React from "react";
import "./image.css";

function Image(props) {
  return (
    <img
      src={props.imageUrl ? props.imageUrl : ""}
      alt="image"
      className="image"
      style={props.style}
    ></img>
  );
}

export default Image;
