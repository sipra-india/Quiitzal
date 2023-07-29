import React from "react";
import "./feature_box.css"


function Feature_box(props) {
  return <div className="container">
    <h2 id="Heading">This is {props.title}!</h2>
    <p id="Description">{props.properties}</p>
    <button id="btn">Go to {props.title}</button>
  </div>;
}

export default Feature_box;

