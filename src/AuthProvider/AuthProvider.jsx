//we are using auth context for share data all over the applicaion
// we write firebase login functions so we can get user info all over application

import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../../firebase.init";
//all import from firebase
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
//create auth context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const GooGleprovider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create user with email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in by email and pass
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //after login update name
  const ProfileUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  };
//signIn with Google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, GooGleprovider);
  };
//here we can get current user
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
//all value that share by context
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
