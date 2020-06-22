import React, { useEffect } from "react";
import { database } from "../../firebase";
import { AddForkliftForm } from "./AddForkliftsForm";
import { Product } from "./Product";

const Products = ({ getProducts, products }) => {
  useEffect(() => {
    database.ref("/").on("value", (snapshot) => {
      getProducts(snapshot.val());
    });
  }, []);

  return (
    <div className="container">
      <AddForkliftForm />

      <h2 className="title text-center mt-5 mb-5">Own production forklifts</h2>

      <ul className="row">
        {Object.values(products).map((val) =>
          Object.values(val).map((item, index) => (
            <li
              key={index}
              className="Product col-4 d-flex flex-column pl-4 pr-4"
            >
              <Product {...item} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Products;
