import React, { useEffect } from "react";
import { database } from "../../firebase";

const ProductDetail = ({ match, products, getProducts }) => {
  const {
    params: { productId },
  } = match;

  // useEffect(() => {
  //   database.ref("/").on("value", (snapshot) => {
  //     getProducts(snapshot.val());
  //   });
  // }, []);

  const product = Object.entries(products).reduce((obj, [key, val]) => {
    if (key === productId) {
      obj[key] = val;
    }
    return obj;
  }, {});

  return (
    <div className="container">
      <h2 className="title text-center mt-3 mb-3">Detail Page</h2>

      <span>
        Product Id: <strong>{productId}</strong>
      </span>
      {Object.values(product).map((item) => item.model)}
    </div>
  );
};

export default ProductDetail;
