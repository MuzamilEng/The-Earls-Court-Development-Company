import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [content, setContent] = useState([]);

  return (
    <UserContext.Provider value={{ content, setContent }}>
      {children}
    </UserContext.Provider>
  );
};
