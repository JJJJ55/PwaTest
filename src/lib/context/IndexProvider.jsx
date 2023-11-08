import React, { useState } from 'react';
import { LoginDispatchContext, LoginStateContext } from './LoginContext';
import { useMemo } from 'react';

export const IndexProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(
    !!sessionStorage.getItem('username'),
  );
  const login = async (name, id) => {
    sessionStorage.setItem('username', name);
    sessionStorage.setItem('id', id);
    setIsLogedIn(true);
  };

  const logout = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('id');
    setIsLogedIn(false);
  };

  const logdispatch = useMemo(() => ({ login, logout }), []);

  return (
    <LoginStateContext.Provider value={isLogedIn}>
      <LoginDispatchContext.Provider value={logdispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
};
