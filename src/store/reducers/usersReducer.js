import { REGISTER_USER, FETCH_USER, SHOW_LOADER, LOGIN_USER } from "../types";

const initialState = {
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
    case FETCH_USER:
      return {
        ...state,
        fetchedUsers: action.payload,
      };
    default:
      return state;
  }
};
