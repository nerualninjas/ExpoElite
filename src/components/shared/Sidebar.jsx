"use client";
import Image from "next/image";

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
  faChartLine,
  faCircleInfo,
  faPeopleGroup,
  faLandmark,
  faUsers,
  faCartShopping,
  faCity,
  faMagnifyingGlassPlus,
  faDollarSign,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
// import {
//   faSellsy,
// } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useAdmin from "@/hooks/users/useAdmin";
import useSeller from "@/hooks/users/useSeller";
// import useSeller from "@/hooks/users/useSeller";


const Sidebar = () => {
  const { user, logOut } = UserAuth();
  const pathName = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  const { isAdmin, isPending, refetch } = useAdmin();
  const { isSeller } = useSeller();
  console.log("is Seller ",isSeller)
  // console.log(isAdmin)

  const handleNavMenu = () => {
    setIsMenu(!isMenu)
  }

  const mainMenu = [
    { pageName: "Homepage", path: "/", icon: faHouseChimney },
    { pageName: "Discover", path: "/discover", icon: faMagnifyingGlassPlus },
    { pageName: "About Us", path: "/about", icon: faCircleInfo },
    { pageName: "Contact Us", path: "/contact", icon: faAddressBook },
  ];

  const adminDashboard = [
    { pageName: "My Dashboard", path: "/dashboard", icon: faChartLine },
    { pageName: "Manage Users", path: "/allUsers", icon: faPeopleGroup },
    { pageName: "Manage Property", path: "/allProducts", icon: faLandmark },
    { pageName: "Sell Report", path: "/allPropertySellReport", icon: faDollarSign },
    { pageName: "All Sellers", path: "/allSellers", icon: faUsers },
  ];
  const userDashboard = [
    { pageName: "My Dashboard", path: "/graphAnalysisUsers", icon: faChartLine },
    { pageName: "My Orders", path: "/paymentList", icon: faCartShopping },

  ]
  const sellerDashboard = [ 
    { pageName: "My Dashboard", path: "/GraphAndAnalysisSeller", icon:faChartLine }, 
    { pageName: "All Property", path: "/products", icon:faCity },
    { pageName: "Manage Appointment", path: "/AppointmentManage", icon:faCalendarCheck }, 

  ];
  return (
    <div>

      {/* small device  */}
      {/* <div className=""> <button onClick={handleNavMenu} className="text-2xl relative ml-10 top-0 pr-5 md:hidden">III</button></div> */}
      {
        isMenu && <>

          <div className=" text-center   min-h-screen bg-neutral  absolute top-0 right-0 z-50 mx-auto  w-56">
            <div className="flex-col item-center justify-center">
              <div className="text-2xl my-10">
                {isMenu && <button onClick={handleNavMenu} >X</button>}
              </div>
              <ul className="space-y-4 h-2/3 my-auto">
                {mainMenu.map((item) => (
                  <li key={item.pageName}>
                    <Link
                      className={`${pathName === item.path ? "bg-base-200  py-2 px-4  rounded-full" : "hover:bg-[#0c7e5c]  hover:text-white py-2 px-4 rounded-full"}`}
                      href={item.path}
                    >
                      {item.pageName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      }

      {/* Large device  */}

      <div className="w-[15rem] hidden md:block fixed  bg-[#FFFFFF]  rounded-tl-2xl min-h-screen">
        <div className="px-8 flex flex-col  h-[100vh] justify-between">
          <section>
            <Image
              className="mx-auto  block pt-4"
              src="https://i.ibb.co/0XXcHdt/logo.png"
              alt="ExpoElite"
              width={80}
              height={80}
            />

            <ul className=" pl-4 py-8  text-md font-thin space-y-6">
              {mainMenu.slice(0, 2).map((menu) => (
                <li key={menu.pageName}>
                  <Link
                    className={`${pathName === menu.path
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
              {user && isAdmin && !isSeller && (
                adminDashboard.map((adminDash) => (
                  <li key={adminDash.pageName}>
                    <Link
                      className={`${pathName === adminDash.path
                        ? "flex items-center gap-2  hover:text-rose-600 text-rose-500 "
                        : "flex items-center gap-2  hover:text-rose-600 text-gray-800 "
                        }`}
                      href={adminDash.path}
                    >
                      <FontAwesomeIcon icon={adminDash.icon} />
                      <h4>{adminDash.pageName}</h4>
                    </Link>
                  </li>
                ))
              )}
              {user && isSeller  && (
                sellerDashboard.map((sellerDash) => (
                  <li key={sellerDash.pageName}>
                    <Link
                      className={`${pathName === sellerDash.path
                        ? "flex items-center gap-2  hover:text-rose-600 text-rose-500 "
                        : "flex items-center gap-2  hover:text-rose-600 text-gray-800 "
                        }`}
                      href={sellerDash.path}
                    >
                      <FontAwesomeIcon icon={sellerDash.icon} />
                      <h4>{sellerDash.pageName}</h4>
                    </Link>
                  </li>
                ))
              )}
              {/* Render products link for regular users */}
              {user && !isAdmin && !isSeller && (
                userDashboard.map((userDash) => (
                  <li key={userDash.pageName}>
                    <Link
                      className={`${pathName === userDash.path
                        ? "flex items-center gap-2  hover:text-rose-600 text-rose-500 "
                        : "flex items-center gap-2  hover:text-rose-600 text-gray-800 "
                        }`}
                      href={userDash.path}
                    >
                      <FontAwesomeIcon icon={userDash.icon} />
                      <h4>{userDash.pageName}</h4>
                    </Link>
                  </li>
                ))

              )}
            </ul>
          </section>
          {/* auth section  */}
          <section className="pb-20 border-t-2 pt-10">
            <ul className=" pl-4  text-md font-thin space-y-6">
              {mainMenu.slice(2, 6).map((menu) => (
                <li key={menu.pageName}>
                  <Link
                    className={`${pathName === menu.path
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

              {/* <li>Help and Support</li> */}
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


    </div>
  );
};

export default Sidebar;
