

const ChatAllUserbox = () => {

    const users =[
        {
           id:1,
        name: "Ashiq",
         profileImg: ""},
        {
           id:2,
        name: "Adnan",
         profileImg: ""},
        {
           id:3,
        name: "Popy",
         profileImg: ""},
        {
           id:4,
        name: "Sabrina",
         profileImg: ""},
        {
           id:5,
        name: "Tashin",
         profileImg: ""},
        {
           id:6,
        name: "Mim",
         profileImg: ""},
    ]
    return (
        <div>
            All user
<ul>
{
    users.map((user)=><li key={user.id}>{user.name}</li>)
}
</ul>
          
        </div>
    );
};

export default ChatAllUserbox;