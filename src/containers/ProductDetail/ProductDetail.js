import React, { useEffect } from "react";
import { database } from "../../firebase";

const ProductDetail = ({ match, products }) => {
  const {
    params: { productId },
  } = match;

  const product = Object.entries(products).reduce((obj, [key, val]) => {
    if (key === productId) {
      obj = val;
    }
    return obj;
  }, {});

  return (
    <div className="container">
      <h2 className="title text-center mt-3 mb-5">Detail Page</h2>

      <div className="row">
        <div className="product-img d-flex justify-content-center col-lg-6 col-12">
          {product.imageURL ? (
            <img src={product.imageURL} width="auto" height="350" />
          ) : (
            <div className="no-image">
              <p>No image</p>
            </div>
          )}
        </div>

        <div className="product-shop-inner col-lg-6 col-12">
          <h1 className="product-model">{product.model}</h1>

          <div className="product-producer mb-3">{product.producer}</div>

          <p className="product-id">Product Id: {productId}</p>

          <div className="product-description mt-5 pt-3 pb-3">
            <p>{product.description}</p>
          </div>

          <table className="table">
            <tbody>
              <tr className="row no-gutters">
                <td className="label col-4">Power type:</td>
                <td className="data col-8">{product.engine}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
