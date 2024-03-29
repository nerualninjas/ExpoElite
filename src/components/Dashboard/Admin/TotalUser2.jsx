"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import useAllUserData from '@/hooks/users/useAllUserData';

const TotalUser2 = () => {
    const { AllUserData } = useAllUserData();
    return (

        <div className="card shadow-md bg-base-100 px-4 py-10 justify-around items-center flex flex-col lg:flex-row">

            {/* <div className="radial-progress text-rose-500" style={{ "--value": "100", "--size": "4rem", "--thickness": "4px" }} role="progressbar"><FontAwesomeIcon className='text-xl bg-red-200 px-4 p-3 rounded-full' icon={faBuilding} /></div> */}

            <FontAwesomeIcon className='rounded-full text-rose-400 w-16 h-16' icon={faUsers} />
            <div className='ml-2'>
                <h2 className='text-xl font-semibold'> Total User</h2>
                <p className='text-lg font-semibold text-red-400 '>{AllUserData?.length}</p>
            </div>
        </div>

    );
};

export default TotalUser2;