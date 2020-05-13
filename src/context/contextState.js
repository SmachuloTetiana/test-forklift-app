import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Context } from "./context";
import { authRef } from "../firebase";
import { loginUser } from "../store/actions";

export const ContextState = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    authRef.onAuthStateChanged((user) => dispatch(loginUser(user)));
  }, [dispatch]);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
