import { LOGIN_USER, LOGOUT_USER } from "../types";

export const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
