import React, { useState } from "react";

const FilterPanel = ({ products, filterProductsByType }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
    filterProductsByType(products);
  };

  return (
    <div className="toolbar mb-3">
      <div className="toolbar-title">
        <span>Shop By</span>
      </div>

      <div className="toolbar-content mt-4">
        <p className="toolbar-subtitle mb-2">type</p>

        <div className="checkList d-flex align-items-center">
          <label htmlFor="check1">Forklifts</label>
          <input
            type="checkbox"
            id="check1"
            defaultChecked={check}
            onChange={handleCheck}
          />
        </div>

        <div className="checkList">
          <label htmlFor="check2">Spare parts</label>
          <input
            type="checkbox"
            id="check2"
            defaultChecked={check}
            onChange={handleCheck}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
