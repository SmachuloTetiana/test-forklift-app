import {
  CREATE_ACCOUNT_USER,
  SHOW_LOADER,
  LOGIN_USER,
  LOGOUT_USER,
} from "../types";

export const initialState = {
  registerUser: null,
  currentUser: null,
  loading: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ACCOUNT_USER:
      return {
        ...state,
        registerUser: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
