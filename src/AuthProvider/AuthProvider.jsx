import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../../firebase.init";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const GooGleprovider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const ProfileUpdate = (name) => {
   return  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: "https://example.com/jane-q-user/profile.jpg",
  })
  
 
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, GooGleprovider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const Authvalue = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    ProfileUpdate,
  };

  return (
    <AuthContext.Provider value={Authvalue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
