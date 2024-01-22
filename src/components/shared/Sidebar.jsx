import Image from "next/image";
import Link from "next/link";
import homeIcon from "../../assets/icon/home-icon.png";
const Sidebar = () => {
  return (
    <div className="w-56 hidden md:block fixed  bg-[#FFFFFF] shadow-2xl  rounded-tl-2xl min-h-screen">
      <div className="p-4">
        <ul>
          <li>
            <Link
              className="flex items-center gap-2 text-rose-500 "
              href="/dashboard"
            >
              <Image src={homeIcon} width={22} height={20} alt="home" />{" "}
              <h4> Dashboard</h4>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 text-rose-500 " href="/">
              {" "}
              <Image src={homeIcon} width={22} height={20} alt="home" />{" "}
              <h4> Homepage</h4>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
