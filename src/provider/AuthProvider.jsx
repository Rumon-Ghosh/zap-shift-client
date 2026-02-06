import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerWithPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, imgURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgURL
    })
  }

  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const LogOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    registerWithPassword,
    updateUserProfile,
    LoginUser,
    googleLogin,
    LogOutUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
