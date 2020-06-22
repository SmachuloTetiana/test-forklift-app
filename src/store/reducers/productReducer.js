import { GET_PRODUCTS } from "store/types";

const initialState = {
  data: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
