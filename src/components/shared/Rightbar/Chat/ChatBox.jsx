import { useState } from "react";
import Image from "next/image";
const ChatBox = ({ user }) => {
  const [openDetail, handleOpenDetails] = useState(false);

  return (
    <div>
      <div
        onClick={() => handleOpenDetails(true)}
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="relative"
      >
        <li
          key={user.id}
          className="flex text-md hover:bg-gray-200  px-2 p-1 w-full rounded-2xl font-medium gap-1 items-center"
        >
          <Image
            className="rounded-full "
            width={40}
            height={40}
            alt={user.name}
            src={user.profileImg}
          />
          {user.name}
        </li>
      </div>

      {openDetail && (
        <div
          id="crud-modal"
          tabIndex={0}
          aria-hidden="true"
          className=" overflow-y-auto overflow-x-hidden static   p-4 right-0  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] "
        >
          <div className=" border h-96 rounded-2xl p-2 bg-blue-200">
            <form action="" className="px-2">
              {" "}
              <input
                type="text"
                className="input-success w-44 mx-auto input input-sm"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
