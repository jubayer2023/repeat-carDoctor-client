import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

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
  };

  // user setting here
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curretUser) => {
      const userEmail = curretUser?.email || user.email;
      const loggedUser = { email: userEmail };

      setUser(curretUser);
      console.log(curretUser);
      setLoading(false);

      //   if present user
      if (curretUser) {
        axios
          .post(
            `https://car-doctor-server-alpha-red.vercel.app/jwt`,
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post(
            `https://car-doctor-server-alpha-red.vercel.app/logout`,
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user]);

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
