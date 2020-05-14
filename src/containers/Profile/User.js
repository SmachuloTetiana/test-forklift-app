import React, { useContext } from "react";
import { Context } from "context/context";

export const User = () => {
  const { state } = useContext(Context);
  const { currentUser } = state;

  if (!currentUser) {
    return null;
  }

  return <div className="container">{currentUser.email}</div>;
};
