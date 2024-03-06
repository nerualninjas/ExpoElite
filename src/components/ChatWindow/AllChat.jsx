import { useQuery } from "@tanstack/react-query";

const AllChat = () => {
    const { data: chatData = [], isLoading, refetch, isPending } = useQuery({
        queryKey: ["allMsg"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllconver`)
            // console.log(res.data);
            return res.data;
        }
    })
    return (
        <div>
            {chatData.map((conversation) => (
                <div key={conversation._id}>
                    <h3>Conversation with {conversation.senderEmail}:</h3>
                    <ul>
                        {conversation.chatLogs.map((log, index) => (
                            <li key={index}>
                                <p>
                                    <strong>{log.sendBy}</strong> on {log.sendingDate} at {log.sendingTime}:
                                </p>
                                <p>{log.message}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AllChat;