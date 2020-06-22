import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
});
