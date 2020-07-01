import { FILTER_BY_TYPE } from "store/types";

const initialState = {
  filteredProducts: null,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TYPE:
      const filtered = Object.entries(action.data)
        .filter(([key, val]) => val.productType === action.chekedName)
        .reduce((obj, [key, val]) => {
          obj[key] = val;
          return obj;
        }, {});

      return {
        ...state,
        filteredProducts: filtered,
      };
    default:
      return state;
  }
};
