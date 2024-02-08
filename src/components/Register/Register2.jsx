"use client";
import React from "react";

import Lottie from "lottie-react";
import RegAni from "./Regi.json";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa6";
import Swal from "sweetalert2";

import { useRouter } from "next/navigation";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import Link from "next/link";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useNotification from "@/hooks/notifications/useNotificationCreate";


const Register2 = () => {
  const router = useRouter();
  const { createUser, googleSignIn, updateUser } = UserAuth();
  const axiosPublic = useAxiosPublic();
  const { notificationPost } = useNotification()

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo =
      form.get("photo") ||
      "https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png";
    const email = form.get("email");
    const password = form.get("password");
    const userData = {
      userName: name,
      userEmail: email,
      userPhoto: photo,
      userRole: "user",
    };

    if (password.length < 6) {
      Swal.fire("Password should be at least 6 characters or longer");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{6,}$/.test(password)
    ) {
      Swal.fire(
        "Oops!",
        "Your password should have length at least 6 character one upper case and one special characters!",
        "error"
      );
      return;
    }

    // create user
    createUser(email, password)
      .then(async (result) => {
        // console.log(result.user);

        updateUser(name, photo);
        // navigate after login
        await axiosPublic.post("/createUser", userData).then((res) => {
          console.log(res.data);
          Swal.fire("Good job!", "User Created Successfully!", "success");
        });

        // notifiacation add  start
        const data = {
          userEmail: email,
          notificationData: [{
            notificationText: "user registration success",
            createdTime: new Date(),
            notificationStatus: "unread"
          }]
        }
        notificationPost(data)

        //notification end
        
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn();
    // Swal.fire("Good job!", "User Logged in Successfully!", "success");

    // navigate after login
    // router.push("/");
    // .then((result) => {
    //   console.log(result.user);

    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  };

  return (
    <div className="min-h-screen ">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-rose-600 py-10 ">
        Register
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4  mb-20 ">
        <div className="hidden md:flex md:w-1/3 pt-10 mr-10">
          <Lottie animationData={RegAni} loop={true} />
        </div>
        <div className="w-full md:w-2/3 max-w-md p-2 space-y-1 rounded-xl ">
          <form
            onSubmit={handleRegister}
            novalidate=""
            action=""
            className="space-y-6 "
          >
            <div className="space-y-1 text-sm">
              <label for="name" className="block text-rose-700">
                Username
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="User Name"
                className="w-full px-4 py-3 rounded-md bg-rose-50"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="email" className="block text-rose-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-rose-50"
              />
            </div>
            {/* user photo field */}
            <div className="space-y-1 text-sm">
              <label for="photo" className="block text-rose-700">
                Photo
              </label>
              {/* <input type="file" name="photo" id="photo" placeholder="Photo" className="w-full px-4 py-3 rounded-md bg-rose-50" /> */}
              <input
                type="text"
                id="photo"
                placeholder="Photo URL"
                name="photo"
                className="w-full px-4 py-3 rounded-md bg-rose-50"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block text-rose-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md bg-rose-50"
              />
              <div className="flex justify-end text-xs text-rose-700">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded bg-rose-600 text-white">
              Register
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16"></div>
            <p className="px-3 text-sm text-rose-700">
              Register with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogin}
              aria-label="Log in with Google"
              className="p-3 rounded-sm text-rose-500"
            >
              <FaGoogle className="text-2xl"></FaGoogle>
            </button>
            <button
              aria-label="Log in with Twitter"
              className="p-3 rounded-sm text-rose-500"
            >
              <FaTwitter className="text-2xl"></FaTwitter>
            </button>
            <button
              aria-label="Log in with Facebook"
              className="p-3 rounded-sm text-rose-500"
            >
              <FaFacebook className="text-2xl"></FaFacebook>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-rose-700">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              href="/login"
              className="underline "
            >
              Login
            </Link>
            {/* <a href="" className='underline'> Login</a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register2;
