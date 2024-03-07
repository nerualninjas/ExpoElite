import UserChatdetails from "@/components/Dashboard/Admin/UserChatData/UserChatdetails";


const UserChatData = ({ params }) => {
    return (
        <div>
            <UserChatdetails ChatId={params?.id} />
        </div>
    );
};

export default UserChatData;