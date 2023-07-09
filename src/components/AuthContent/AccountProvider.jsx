import React, { createContext, useContext, useState } from "react";

export const AuthProvider = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();

  const [person, setPerson] = useState({});

  const value = { account, setAccount, person, setPerson };

  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

export default AccountProvider;
