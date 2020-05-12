import { REGISTER_USER, SHOW_LOADER, FETCH_USER, LOGIN_USER } from "./types";

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const registerUser = () => {
  return {
    type: REGISTER_USER,
  };
};

export const loginUser = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const fetchedUsers = (payload) => ({
  type: FETCH_USER,
  payload,
});
