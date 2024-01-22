import Image from "next/image";
import profile from "../../../public/profile.png";

const Navbar = () => {
  const btnActive = true;
  const nbtnActive = false;
  return (
    <div className="py-2 px-5 bg-[#F9FAFE] flex justify-between  lg:w-[calc(100vw-240px)] md:start-[14rem]  fixed h-16">
      <h2 className="font-extrabold text-xl">
        {" "}
        Good Morning, <span className="text-rose-400">Welcome ExpoElite</span>
      </h2>
      <div>
        <button
          className={
            btnActive
              ? " px-2 py-1 text-sm rounded-md bg-rose-200"
              : " px-2 py-1 text-sm rounded-md bg-rose-50"
          }
        >
          Buy
        </button>
        <button
          className={
            nbtnActive
              ? " px-2 py-1 text-sm rounded-md bg-rose-200"
              : " px-2 py-1 text-sm rounded-md bg-rose-50"
          }
        >
          Rent
        </button>
      </div>
      <div>
        <Image
          src={profile}
          width={40}
          height={40}
          alt="profile"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
