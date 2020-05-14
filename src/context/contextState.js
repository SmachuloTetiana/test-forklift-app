import React, { useEffect, useReducer } from "react";
import { Context } from "./context";
import { authRef } from "../firebase";
import { loginUser } from "store/actions";
import { usersReducer, initialState } from "store/reducers/usersReducer";

export const ContextState = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    authRef.onAuthStateChanged((user) => dispatch(loginUser(user)));
  }, [dispatch]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
