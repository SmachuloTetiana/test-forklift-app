import React, { useState } from "react";

const FilterPanel = ({ products, filterProductsByType }) => {
  const [check, setCheck] = useState("");

  const handleCheck = (e) => {
    const { value } = e.target;
    setCheck(value);
    filterProductsByType(products, value);
  };

  return (
    <div className="toolbar mb-3">
      <div className="toolbar-title">
        <span>Shop By</span>
      </div>

      <div className="toolbar-content mt-4">
        <p className="toolbar-subtitle mb-2">type</p>

        <div className="radioButtons" onChange={handleCheck}>
          <p>
            <label htmlFor="check1">Forklifts</label>
            <input
              type="radio"
              id="check1"
              name="type"
              defaultValue="forklift"
              defaultChecked={check === "forklift"}
            />
          </p>

          <p>
            <label htmlFor="check2">Spare parts</label>
            <input
              type="radio"
              id="check2"
              name="type"
              defaultValue="spare_parts"
              defaultChecked={check === "spare_parts"}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
