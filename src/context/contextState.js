import React, { useEffect, createContext } from "react";
import { authRef } from "../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "store/actions";

export const Context = createContext();

export const ContextState = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    authRef.onAuthStateChanged((user) => user && dispatch(loginUser(user)));
  }, [dispatch]);

  return <Context.Provider value={{ dispatch }}>{children}</Context.Provider>;
};
