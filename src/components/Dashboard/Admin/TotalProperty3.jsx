"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import useTotalProperty from '@/hooks/Propertys/useTotalProperty';

const TotalSeller2 = () => {
    const { totalPropertyLength } = useTotalProperty();
    return (

        <div className="card shadow-md bg-base-100 px-4 py-10 justify-around items-center flex flex-col lg:flex-row">
            {/* 
            <div className=" text-rose-500"><FontAwesomeIcon className='text-xl bg-red-200 px-4 p-3 rounded-full' icon={faBuilding} /></div> */}
            <FontAwesomeIcon className=' text-rose-400 w-16 h-16' icon={faBuilding} />
            <div className='ml-2'>
                <h2 className='text-xl font-semibold'> Total Property</h2>
                <p className='text-lg font-semibold text-red-400 '>{totalPropertyLength}</p>
            </div>
        </div>

    );
};

export default TotalSeller2;