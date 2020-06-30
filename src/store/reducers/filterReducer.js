import { FILTER_BY_TYPE } from "store/types";

const initialState = {
  filteredProducts: null,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TYPE:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
};
