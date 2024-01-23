"use client";
import React from "react";
import { UserAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { googleSignIn } = UserAuth();
  return (
    <div className="text-black">
      Login Page
      <button onClick={googleSignIn} className="btn">
        Google login
      </button>
    </div>
  );
};

export default LoginPage;
