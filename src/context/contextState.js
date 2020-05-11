import React, { useReducer } from 'react';
import { Context } from './context';

export const ContextState = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
