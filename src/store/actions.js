import {
  CREATE_ACCOUNT_USER,
  SHOW_LOADER,
  LOGIN_USER,
  LOGOUT_USER,
} from "./types";

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const createAccountUser = (user) => ({
  type: CREATE_ACCOUNT_USER,
  payload: user,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = (user) => ({
  type: LOGOUT_USER,
  payload: user,
});
