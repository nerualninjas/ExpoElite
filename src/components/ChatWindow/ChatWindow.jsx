"use client"
import React, { useState } from 'react';
import { BsFillChatRightDotsFill } from "react-icons/bs";
import ChatBox from './ChatBox';

const ChatWindow = () => {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="text-center py-3">
                <button
                    onClick={handleToggleModal}
                    className="bg-rose-500 text-white px-4 py-4 rounded-full hover:scale-95 transition text-xl"
                >
                    <BsFillChatRightDotsFill className='text-3xl' />
                </button>
            </div>
            {showModal && <ChatBox onClose={handleToggleModal} visible={showModal} zIndex={45} />}
        </div>
    );
};

export default ChatWindow;
