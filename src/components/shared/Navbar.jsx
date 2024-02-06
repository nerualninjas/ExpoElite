"use client";
import Image from "next/image";

import { UserAuth } from "@/app/(auth)/context/AuthContext";
import ThemeSwitcher from '@/app/ThemeSwitcher';
import { useEffect, useState } from "react";

import Link from "next/link";

import productList from "../../assets/icon/products.png";
import {
  faAddressBook,
  faCircle,
  faHouseChimney,
  faCircleInfo,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "@/app/loading";

const Navbar = () => {
  const { user, loading, logOut } = UserAuth();
  const [currentTime, setCurrentTime] = useState(new Date().getHours());
  const [isMenu, setIsMenu] = useState(false);
  const pathName = usePathname();
  const [isDropMenuOpen, setIsDropMenu] = useState(false);
  const [imageLoading,setImageLoading]=useState(true)

  // console.log(user?.photoURL);
  const handleImageLoad =()=>{
    setImageLoading(false)
  }

  const handleNavMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleMouseEnter = () => {
    setIsDropMenu(true);
  };

  const handleMouseLeave = () => {
    setIsDropMenu(false);
  };

  const mainMenu = [
    { pageName: "Homepage", path: "/", icon: faHouseChimney },
    { pageName: "Discover", path: "/discover", icon: faCircle },
    { pageName: "About Us", path: "/about", icon: faCircleInfo },
    { pageName: "Contact Us", path: "/contact", icon: faAddressBook },

  ];

  const btnActive = true;
  const nbtnActive = false;

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date().getHours());
    };
    const time = setInterval(updateCurrentTime, 3600000);

    return () => {
      clearInterval(time);
    };
  }, []);

  let greeting;

  if (currentTime > 20) {
    greeting = "Good Night";
  } else if (currentTime > 18) {
    greeting = "Good Evening";
  } else if (currentTime > 15) {
    greeting = "Good Afternoon";
  } else if (currentTime > 11) {
    greeting = "Good Noon";
  } else if (currentTime > 4) {
    greeting = "Good Morning";
  } else {
    greeting = "Good Mid-Night";
  }

  // if (!loading) {
  //   return (
  //    setImageLoading(false)
  //   );
  // }
  return (
    <>
      {/* small device  */}
{/* {imageLoading && <Loading/> } */}
      {isMenu && (
        <>
          <div className=" text-center   min-h-screen bg-base-200  absolute top-0 right-0 z-30 mx-auto  w-56">
            <div className="flex-col item-center justify-center">
              <Image
                className="mx-auto  block pt-4"
                src="https://i.ibb.co/0XXcHdt/logo.png"
                alt="ExpoElite"
                width={80}
                height={80}
              />
              <div className="text-2xl my-10   ">
                {isMenu && <button onClick={handleNavMenu}>X</button>}
              </div>
              <ul className="space-y-4 h-2/3 my-auto">
                {mainMenu.map((item) => (
                  <li key={item.pageName}>
                    <Link
                      className={`${
                        pathName === item.path
                          ? "bg-pink-200  py-2 px-4  rounded-full"
                          : "hover:bg-pink-200  hover:text-white py-2 px-4 rounded-full"
                      }`}
                      href={item.path}
                    >
                      {item.pageName}
                    </Link>
                  </li>
                ))}
                {/* if user login seller and admin  */}
                {user && (
                  <li>
                    <Link
                      className={`${
                        pathName === "/products"
                          ? "flex items-center gap-2  hover:text-rose-600 text-rose-500 "
                          : "flex items-center gap-2  hover:text-rose-600 text-gray-800 "
                      }`}
                      href="/products"
                    >
                      {" "}
                      {/* <Image
                    src={productList}
                    width={18}
                    height={18}
                    alt="home"
                  />{" "} */}
                      <h4 className="text-center mx-auto">Products</h4>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      )}

      <div className="py-4 lg:px-4 z-30 bg-[#FFFFFF] flex items-center justify-between w-full md:w-[calc(100vw-230px)]  2xl:w-[calc(100vw-230px)] md:start-[14rem]  fixed h-20">
        <div className="   md:hidden">
          {" "}
          <button
            onClick={handleNavMenu}
            className="text-2xl px-3
  "
          >
            III
          </button>
        </div>

        <h2 className="font-extrabold lg:text-3xl text-gray-900">
          {greeting}!,
          <span className="text-rose-500 ">Welcome ExpoElite</span>
        </h2>
        <div className="bg-gray-100 hidden md:flex gap-2 p-2 rounded-xl">
          <button
            className={
              btnActive
                ? " px-3 py-1 text-sm rounded-md bg-rose-200"
                : " px-3 py-1 text-sm rounded-md bg-rose-50"
            }
          >
            Buy
          </button>
          <button
            className={
              nbtnActive
                ? " px-3 py-1 text-sm rounded-md bg-rose-200"
                : " px-3 py-1 text-sm rounded-md bg-rose-50"
            }
          >
            Rent
          </button>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher/>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item">
                {2}
              </span>
            </div>
          </button>
          {user ? (
            <div
              className="dropdown z-[40] dropdown-end pl-5"
              onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <Image
                  onLoad={handleImageLoad}
                    src={user?.photoURL}
                    width={50}
                    height={50}
                    alt="profile"
                    className="rounded-full"
                  />
                </div>
              </div>
              {isDropMenuOpen && (
                <div
                  className="menu menu-sm dropdown-content mt-3 z-[28] p-2 shadow bg-base-200 rounded-box w-56 lg:w-72"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul tabIndex={0} className="">
                    <Image
                      src={user?.photoURL}
                      width={100}
                      height={100}
                      alt="profile"
                      className="rounded-full mx-auto"
                    />

                    <h3 className="justify-between  text-xl px-2">
                      {user?.displayName}
                    </h3>

                    <li>
                      <a className="justify-between border-b-1 border-rose-500 hover:text-rose-500 p-2 bg-base-100 w-full">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="p-2 bg-base-100 border-b-1 border-rose-500 hover:text-rose-500  w-full">
                        Settings
                      </a>
                    </li>
                    <li>
                      {user ? (
                        <button
                          className=" p-2 bg-base-100 border-b-1 border-rose-500 hover:text-rose-500  w-full"
                          onClick={() => logOut()}
                        >
                          Sign Out
                        </button>
                      ) : (
                        <Link href="/login">
                          <button>Login</button>
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="pl-4 btn bg-rose-400 hover:bg-rose-600 text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
