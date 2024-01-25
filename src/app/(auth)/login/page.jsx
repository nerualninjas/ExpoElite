"use client";
import React from "react";
import { UserAuth } from "../context/AuthContext";
import Login from "@/components/Login/Login";

const LoginPage = () => {
  const { googleSignIn } = UserAuth();
  return (
    <div className="text-black">
      <Login />
      {/* <button onClick={googleSignIn} className="btn">
        Google login
      </button> */}
    </div>
  );
};

export default LoginPage;
