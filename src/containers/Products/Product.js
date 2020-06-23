import React from "react";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { imageURL, model, producer, index } = props;

  return (
    <React.Fragment>
      <div
        className={`outer-image d-flex justify-content-center align-items-center ${
          !imageURL && "no-image"
        }`}
      >
        {imageURL ? (
          <img src={imageURL} width="auto" height="225" />
        ) : (
          <span>No photo</span>
        )}
      </div>

      <Link to={`product/${index}`} className="d-flex justify-content-center">
        {model}
      </Link>

      <span className="d-flex justify-content-center">{producer}</span>
      {/* <p>{props.description}</p> */}
    </React.Fragment>
  );
};
