"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';


const ChatBox = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([
        { sender: 'You', message: 'Hello!', timestamp: new Date() },
        { sender: 'Friend', message: 'Hi there!', timestamp: new Date() },
    ]);

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setChat([
                ...chat,
                { sender: 'You', message, timestamp: new Date() },
            ]);
            setMessage('');
        }
    };

    return (
        <div className="fixed bottom-20 right-4 z-45">
            <div className="w-96 bg-slate-100 border border-gray-300 rounded-lg overflow-hidden flex flex-col">
                <div className="bg-rose-500 text-white p-2 flex items-center justify-between">
                    <Image
                        width={200}
                        height={150}
                        src="https://i.postimg.cc/15pSTk1V/sabila.jpg"
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>Husneara</span>
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 rounded pr-8" 
                        />
                        <AiOutlineSearch
                            size={20}
                            className="absolute right-2 text-gray-500"
                        />
                    </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto bg-base-100">
                    {chat.map((msg, index) => (
                        <div key={index} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
                            <div
                                className={`inline-block p-2 rounded-lg ${
                                    msg.sender === 'You' ? 'bg-rose-200 text-black' : 'bg-green-100 text-black'
                                }`}
                            >
                                {msg.message}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    ))}
                </div>
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

export default ChatBox;
