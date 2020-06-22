import React from "react";
import { Link } from "react-router-dom";

export const Product = (props) => {
  return (
    <React.Fragment>
      <div className="outer-image d-flex justify-content-center">
        <img src={props.imageURL} width="auto" height="225" />
      </div>

      <Link
        to={`product/${props.model}`}
        className="d-flex justify-content-center"
      >
        {props.model}
      </Link>

      <span className="d-flex justify-content-center">{props.producer}</span>
      {/* <p>{props.description}</p> */}
    </React.Fragment>
  );
};
