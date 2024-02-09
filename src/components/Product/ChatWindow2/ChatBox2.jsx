"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useGetMessage from '@/hooks/chatBot/useGetMessage';

const ChatBox2 = ({propertyId, propertyCreator}) => {
    const axiosPublic = useAxiosPublic();
    const { user } = UserAuth();
    
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const {messageLogs, messegeLoading, refetch, messegePending} = useGetMessage({senderEmail: user.email, reciverEmail: propertyCreator, propretyId: propertyId});
    console.log(messageLogs.chatLogs);

    useEffect(() => {
        setChat(messageLogs.chatLogs);
        refetch();
      }, [messageLogs, refetch]);


    const handleSendMessage = async() => {
        if (message.trim() !== '') {
            console.log(message);
            console.log('from chatBot: ', user)
            console.log('from chatBot: ', propertyId)
            console.log('from chatBot: ', propertyCreator)
            const res = await axiosPublic.post(`/sendMessage?senderEmail=${user.email}&reciverEmail=${propertyCreator}&propertyId=${propertyId}`, {
                message: message
            });
            console.log(res.data);
            refetch();
            setMessage('');
        }
    };
    console.log(chat)

    if(messegeLoading){
        return 'loading';
    }
    
 
    return (
        <div className="fixed bottom-20 right-4 z-45">
            <div className="w-96 bg-slate-100 border border-gray-300 rounded-lg overflow-hidden flex flex-col">
                <div className="bg-rose-500 text-white p-2 flex items-center justify-start">
                    <Image
                        width={200}
                        height={150}
                        src="https://i.postimg.cc/15pSTk1V/sabila.jpg"
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>Husneara</span>
                </div>
                {
                    chat ?  <div className="flex-1 p-4 overflow-y-auto bg-base-100">
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
export default ChatBox2;
