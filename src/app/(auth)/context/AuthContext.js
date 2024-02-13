"use client";

import { auth } from "@/app/firebase.config";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const axiosPublic = useAxiosPublic();
  console.log(loading)
  // google sign in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (res) => {
      if (res.user) {
        // navigate after login
        const userData = {
          userName: res?.user.displayName,
          userEmail: res?.user.email,
          userPhoto: res?.user.photoURL,
          userRole: "user",
        };
        await axiosPublic.post("/createUser", userData).then((res) => {
          // console.log(res.data);
          Swal.fire("Good job!", `${res.data.message}`, "success");
          router.push("/");
        });
      }
    });
  };

  // email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update user
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // sign In
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true)

      console.log(currentUser);
      setUser(currentUser);
      if (currentUser) {
        const userInfo = {email:currentUser.email};
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
          if(res.data?.token){
            localStorage.setItem('access-token',res.data?.token);
            setLoading(false)
          }
        })
              }else{ 
                localStorage.removeItem('access-token');
                setLoading(false);
              }
    });
    return () => unsubcribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, loading, googleSignIn, createUser, updateUser, signIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
