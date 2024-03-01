"use client"
import React, { useState } from 'react';
import { BsFillChatRightDotsFill } from "react-icons/bs";

import ChatBox2 from './ChatBox2';

const ChatWindow2 = ({ propertyId, propertyCreator }) => {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="text-center py-3">
                <button
                    onClick={handleToggleModal}
                    className="bg-rose-500 text-white px-3 py-3 rounded-l-2xl rounded-tr-2xl hover:scale-95 transition text-xl"
                >
                    <h2 className=' flex justify-between text-white font extrabold text-large'><BsFillChatRightDotsFill /> Talk directly to Agent</h2>
                    {/* <BsFillChatRightDotsFill className='text-2xl' /> */}
                </button>
            </div>
            {showModal && <ChatBox2 propertyCreator={propertyCreator} propertyId={propertyId} onClose={handleToggleModal} visible={showModal} zIndex={45} />}
        </div>
    );
};

export default ChatWindow2;