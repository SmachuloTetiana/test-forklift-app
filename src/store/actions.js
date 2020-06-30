import { LOGIN_USER, LOGOUT_USER, GET_PRODUCTS, FILTER_BY_TYPE } from "./types";

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

export const filterProductsByType = (data) => ({
  type: FILTER_BY_TYPE,
  payload: data,
});
