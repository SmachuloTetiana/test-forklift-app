import React, { useReducer, useState } from 'react';
import { Context } from './context';

export const ContextState = ({ children }) => {
  const { error, setError } = useState('');

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
