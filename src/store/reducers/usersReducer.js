import { CREATE_USER_ACCOUNT, FETCH_USER, SHOW_LOADER } from '../types';

const initialState = {
  users: [],
  fetchedUsers: [],
  loading: false
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      };
    case CREATE_USER_ACCOUNT:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case FETCH_USER:
      return {
        ...state,
        fetchedUsers: action.payload
      };
    default:
      return state;
  }
};
