import React from "react";

export const ProductDetail = ({ match, location }) => {
  const {
    params: { productModel },
  } = match;

  return (
    <div className="container">
      <h2 className="title text-center mt-3 mb-3">Detail Page</h2>

      <span>
        Product Model: <strong>{productModel}</strong>
      </span>
    </div>
  );
};
