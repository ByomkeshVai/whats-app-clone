import React, { createContext, useContext, useState } from 'react';

export const AuthProvider = createContext(null)

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState();

    const value = { account, setAccount }

    return (
        <AuthProvider.Provider value={value}>
            {children}
       </AuthProvider.Provider>
    );
};

export default AccountProvider;