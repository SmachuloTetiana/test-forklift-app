import React, { useEffect, useState } from "react";
import Select from "react-select";
import { database } from "../../firebase";
import { AddForkliftForm } from "./AddForkliftsForm";
import { Product } from "./Product";

const options = [
  {
    label: "Add Forklift",
    value: "forklift",
  },
  {
    label: "Add Spare Parts",
    value: "spare_parts",
  },
];

const Products = ({ getProducts, products, isLoggedIn }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption });
    console.log(selectedOption);
  };

  useEffect(() => {
    database.ref("/").on("value", (snapshot) => {
      getProducts(snapshot.val());
    });
  }, []);

  return (
    <div className="container">
      <Select
        options={options}
        value={options.value}
        onChange={handleChange}
        className="mb-3"
      />
      {isLoggedIn && <AddForkliftForm />}

      <h2 className="title text-center mt-5 mb-5">Own production forklifts</h2>

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
  );
};

export default Products;
