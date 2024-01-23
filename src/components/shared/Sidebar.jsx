"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import homeIcon from "../../assets/icon/home-icon.png";
import discover from "../../assets/icon/icons8-discover-50.png";
import productList from "../../assets/icon/products.png";
import power from "../../assets/icon/power-icon.png";
import aboutUs from "../../assets/icon/about-50.png";
import contact from "../../assets/icon/contact-us-50.png";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const { user, logOut } = UserAuth();
  const pathName = usePathname();

  const mainMenu = [
    { pageName: "Homepage", path: "/", icon: homeIcon },
    { pageName: "Discover", path: "/discover", icon: discover },
    { pageName: "About Us", path: "/about", icon: aboutUs },
    { pageName: "Contact Us", path: "/contact", icon: contact },
  ];
  return (
    <div className="w-48 hidden md:block fixed  bg-[#FFFFFF] shadow-2xl  rounded-tl-2xl min-h-screen">
      <div className="p-4 flex flex-col border h-[100vh] justify-between">
        <section>
          <h2 className="text-3xl font-semibold  hover:text-rose-600 text-rose-500">
            ExpoELite
          </h2>
          <ul className="pt-20 space-y-3">
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
                  {" "}
                  <Image
                    src={menu.icon}
                    width={18}
                    height={18}
                    alt={menu.pageName}
                  />{" "}
                  <h4> {menu.pageName}</h4>
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
          <ul className="space-y-3">
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
                  {" "}
                  <Image
                    src={menu.icon}
                    width={18}
                    height={18}
                    alt={menu.pageName}
                  />{" "}
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
