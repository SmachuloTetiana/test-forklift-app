import { LOGIN_USER, LOGOUT_USER, GET_PRODUCTS } from "./types";

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = (user) => ({
  type: LOGOUT_USER,
  payload: user,
});

export const getProducts = (data) => ({
  type: GET_PRODUCTS,
  payload: data,
});
