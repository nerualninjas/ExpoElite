
import ChatBox from "./ChatBox";

const ChatAllUserbox = () => {
  const users = [
    {
      id: 1,
      name: "Ashiq",
      profileImg:
        "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-313.jpg",
    },
    {
      id: 2,
      name: "Adnan",
      profileImg:
        "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-313.jpg",
    },
    {
      id: 3,
      name: "Popy",
      profileImg:
        "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-313.jpg",
    },
    {
      id: 4,
      name: "Sabrina",
      profileImg:
        "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-313.jpg",
    },
    {
      id: 5,
      name: "Tashin",
      profileImg:
        "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-313.jpg",
    },
    {
      id: 6,
      name: "Mim",
      profileImg:
        "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-313.jpg",
    },
  ];
  return (
    <div>
      <div className="px-3 ">
        <h3>Contacts</h3>{" "}
        <input type="text" className="w-full  input-info input input-sm" />
      </div>
      <ul>
        {users.map((user) => (
          <ChatBox key={user.id} user={user} />
          //  <li
          //    key={user.id}
          //    className="flex text-md hover:bg-gray-200  px-2 p-1 w-full rounded-2xl font-medium gap-1 items-center"
          //  >
          //    <Image
          //      className="rounded-full "
          //      width={40}
          //      height={40}
          //      alt={user.name}
          //      src={user.profileImg}
          //    />
          //    {user.name}
          //  </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatAllUserbox;
