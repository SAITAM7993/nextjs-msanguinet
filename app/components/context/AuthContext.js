'use client';
import { auth, provider } from '@/app/firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from 'firebase/auth';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ logged: false, email: null, uid: null });

  const logout = async () => {
    await signOut(auth);
  };
  const registerUser = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
  };

  const loginUser = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
  };
  //observador de estado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ logged: false, email: null, uid: null });
      }
    });
  }, []);

  //array de dep vacio para que se renderze solo en el montaje

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, logout, googleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
