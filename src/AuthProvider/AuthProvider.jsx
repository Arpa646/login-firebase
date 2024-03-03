import { getApp } from 'firebase/app';
import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase.init';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {

    const Auth=get(app)   
     const [user, setuser] = useState('arpa')
    const Authvalue={
        user

    }
    return (
        <AuthContext.Provider value={Authvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;