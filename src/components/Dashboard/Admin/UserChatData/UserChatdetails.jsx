"use client"
import Title2 from '@/components/shared/Title/Title2';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { UserAuth } from '@/app/(auth)/context/AuthContext';

const UserChatdetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { user } = UserAuth();

    const { data: messageLogs, isLoading, isPending, refetch } = useQuery({
        queryKey: ["singleChatData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getMessage?id=${id}`);
            console.log(res.data);
            return res?.data;
        },
    });

    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    console.log(messageLogs);

    useEffect(() => {
        setChat(messageLogs?.chatLogs);
        refetch();
    }, [messageLogs, refetch]);


    const handleSendMessage = async () => {
        if (message.trim() !== '') {
            console.log(message);
            const res = await axiosPublic.post(`/sendMessage?senderEmail=${user.email}&user=${messageLogs.senderEmail}`, {
                message: message
            });
            console.log(res.data);
            refetch();
            setMessage('');
        }
    };


    if (isLoading) {
        return 'loading';
    }

    return (
        <div className="w-full">
            <div className=" bg-slate-100 border border-gray-300 rounded-lg overflow-hidden flex flex-col">
                <div className="bg-rose-500 text-white p-2 flex items-center justify-start">
                    <Image
                        width={200}
                        height={150}
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>{user?.displayName}</span>
                </div>
                {
                    chat ? <div className="flex-1 p-4 overflow-y-auto bg-base-100">
                        {chat.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.sendBy === user.email ? 'text-right' : 'text-left'}`}>
                                <div
                                    className={`inline-block p-2 rounded-lg ${msg.sendBy === user.email ? 'bg-rose-200 text-black' : 'bg-green-100 text-black'
                                        }`}
                                >
                                    {msg.message}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                    {msg.sendingTime}
                                </div>
                            </div>
                        ))}
                    </div> : "no chat"
                }

                <div className="p-2 flex items-center justify-between bg-gray-200">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 p-2 rounded"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-rose-500 text-white p-2 rounded ml-2"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserChatdetails;