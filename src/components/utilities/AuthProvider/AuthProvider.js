import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase/useFirebase'
export const AuthenticationContext = createContext();
const AuthProvider = ({ children }) => {
    const allData = useFirebase();
    console.log(allData)
    return (
        <AuthenticationContext.Provider value={allData}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthProvider;