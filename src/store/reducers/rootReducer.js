import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { productReducer } from "./productReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  filter: filterReducer,
});
