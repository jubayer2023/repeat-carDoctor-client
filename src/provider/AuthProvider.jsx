import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   creating user here
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login setting here

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  // user setting here
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curretUser) => {
      setUser(curretUser);
      console.log(curretUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // all props are here
  const authInfo = {
    createUser,
    signInUser,
    logOut,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {""}
      {children}
      {""}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
