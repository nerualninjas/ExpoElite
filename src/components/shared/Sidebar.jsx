import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import homeIcon from "../../assets/icon/home-icon.png";
const Sidebar = () => {
  return (
    <div className="w-56 hidden md:block fixed  bg-[#FFFFFF] shadow-2xl  rounded-tl-2xl min-h-screen">
      <div className="p-4 flex flex-col border h-[100vh] justify-between">
        <section>
          <h2 className="text-3xl font-semibold text-rose-500">ExpoELite</h2>
          <ul className="pt-20">
            <li>
              <Link className="flex items-center gap-2 text-rose-500 " href="/">
                {" "}
                <Image src={homeIcon} width={22} height={20} alt="home" />{" "}
                <h4> Homepage</h4>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 text-rose-500 " href="/">
                {" "}
                <Image src={homeIcon} width={22} height={20} alt="home" />{" "}
                <h4> Menu 2</h4>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 text-rose-500 " href="/">
                {" "}
                <Image src={homeIcon} width={22} height={20} alt="home" />{" "}
                <h4> Menu 3</h4>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 text-rose-500 " href="/">
                {" "}
                <Image src={homeIcon} width={22} height={20} alt="home" />{" "}
                <h4> Menu 4</h4>
              </Link>
            </li>
          </ul>
        </section>
        {/* auth section  */}
        <section className="pb-20 border-t-2 pt-10">
          <ul>
            <li>Help and Support</li>
            <li>
              <Link
                className="flex items-center gap-2 text-rose-500 "
                href="/login"
              >
                <FaLongArrowAltRight />
                <h4> Login</h4>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
