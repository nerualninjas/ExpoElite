"use client";
import React from "react";
import { UserAuth } from "../context/AuthContext";
import Login from "@/components/Login/Login";
// import Login2 from "@/components/Login/Login2";

const LoginPage = () => {
  const { googleSignIn } = UserAuth();
  return (
    <div className="text-black">
      <Login />
      {/* <Login2 /> */}
      {/* <button onClick={googleSignIn} className="btn">
        Google login
      </button> */}
    </div>
  );
};

export default LoginPage;
