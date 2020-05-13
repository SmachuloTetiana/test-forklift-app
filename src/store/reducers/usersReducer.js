import { REGISTER_USER, SHOW_LOADER, LOGIN_USER, LOGOUT_USER } from "../types";

export const initialState = {
  currentUser: [],
  fetchedUsers: [],
  loading: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        currentUser: [...state.currentUser, action.payload],
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
