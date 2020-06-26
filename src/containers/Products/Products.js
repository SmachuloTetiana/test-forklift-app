import React, { useEffect } from "react";
import { database } from "../../firebase";
import { AddForkliftForm } from "./AddForkliftsForm";
import { Product } from "./Product";
import { FilterPanel } from "containers/FilterPanel/FilterPanel";

const Products = ({ getProducts, products, isLoggedIn }) => {
  useEffect(() => {
    database.ref("/").on("value", (snapshot) => {
      getProducts(snapshot.val());
    });
  }, []);

  return (
    <div className="container">
      {isLoggedIn && <AddForkliftForm />}

      <h2 className="title text-center mt-5 mb-5">Own production forklifts</h2>

      <div className="row">
        <div className="col-3">
          <FilterPanel />
        </div>
        <div className="col-9">
          <ul className="row">
            {!products ? (
              <p>No data</p>
            ) : (
              Object.entries(products).map(([key, val]) => (
                <li
                  key={key}
                  className="Product col-4 d-flex flex-column pl-4 pr-4 mb-4"
                >
                  <Product {...val} index={key} />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
