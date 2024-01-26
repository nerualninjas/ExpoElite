"use client";

import { auth } from "@/app/firebase.config";
import {

  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(false)

  // google sign in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password);
  };

  //update user
  const updateUser= (name,photo)=>{
    setLoading(true);
return updateProfile(auth.currentUser,{
  displayName: name,
  photoURL:photo,
})
  }

// sign In
const signIn =(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => unsubcribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn,createUser,updateUser,signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
