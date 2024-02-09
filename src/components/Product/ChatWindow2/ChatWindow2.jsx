"use client"
import React, { useState } from 'react';
import { BsFillChatRightDotsFill } from "react-icons/bs";

import ChatBox2 from './ChatBox2';

const ChatWindow2 = ({propertyId, propertyCreator}) => {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="text-center py-3">
                <button
                    onClick={handleToggleModal}
                    className="bg-rose-500 text-white px-3 py-2 rounded-full hover:scale-95 transition text-xl"
                >
                    <BsFillChatRightDotsFill />
                </button>
            </div>
            {showModal && <ChatBox2 propertyCreator={propertyCreator} propertyId={propertyId} onClose={handleToggleModal} visible={showModal} zIndex={45} />}
        </div>
    );
};

export default ChatWindow2;