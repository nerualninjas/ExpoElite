"use client";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

import productList from "../../assets/icon/products.png";
import power from "../../assets/icon/power-icon.png";

import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { usePathname } from "next/navigation";


import {
  faAddressBook,
 faCircle,
faHouseChimney,
faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const { user, logOut } = UserAuth();
  const pathName = usePathname();

  const mainMenu = [
    { pageName: "Homepage", path: "/", icon: faHouseChimney },
    { pageName: "Discover", path: "/discover", icon: faCircle },
    { pageName: "About Us", path: "/about", icon: faCircleInfo },
    { pageName: "Contact Us", path: "/contact", icon: faAddressBook },
  ];
  return (
    <div className="w-[15rem] hidden md:block fixed  bg-[#FFFFFF]  rounded-tl-2xl min-h-screen">
      <div className="px-8 flex flex-col  h-[100vh] justify-between">
        <section>
          <Image
            className="pl-5 block pt-4"
            src={logo}
            alt="ExpoElite"
            width={80}
            height={80}
          />

          <ul className=" pl-4 pt-16 text-md font-thin space-y-6">
            {mainMenu.slice(0, 2).map((menu) => (
              <li key={menu.pageName}>
                <Link
                  className={`${
                    pathName === menu.path
                      ? "flex items-center gap-2  hover:text-rose-600 text-rose-500 "
                      : "flex items-center gap-2  hover:text-rose-600 text-gray-800 "
                  }`}
                  href={menu.path}
                >
                <FontAwesomeIcon icon={menu.icon} />
                  <h4 className=""> {menu.pageName}</h4>
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
                  <Image
                    src={productList}
                    width={18}
                    height={18}
                    alt="home"
                  />{" "}
                  <h4>Products</h4>
                </Link>
              </li>
            )}
          </ul>
        </section>
        {/* auth section  */}
        <section className="pb-20 border-t-2 pt-10">
          <ul className=" pl-4  text-md font-thin space-y-6">
            {mainMenu.slice(2, 6).map((menu) => (
              <li key={menu.pageName}>
                <Link
                  className={`${
                    pathName === menu.path
                      ? "flex items-center gap-2  hover:text-rose-600 text-rose-500 "
                      : "flex items-center gap-2  hover:text-rose-600 text-gray-800 "
                  }`}
                  href={menu.path}
                >
                   <FontAwesomeIcon icon={menu.icon} />
                  <h4> {menu.pageName}</h4>
                </Link>
              </li>
            ))}

            <li>Help and Support</li>
            <li>
              {user ? (
                <button
                  className="flex items-center gap-2  hover:text-rose-600 text-rose-500 "
                  onClick={() => logOut()}
                >
                  <Image src={power} width={18} height={18} alt="home" />
                  <h4> LogOut</h4>
                </button>
              ) : (
                <>
                  {" "}
                  <Link
                    className="flex items-center gap-2  hover:text-rose-600 text-rose-500 "
                    href="/login"
                  >
                    <Image src={power} width={22} height={20} alt="home" />
                    <h4> Login</h4>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
