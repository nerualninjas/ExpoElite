"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faBuildingCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import useSellerSoldProperty from '@/hooks/Propertys/useSellerSoldProperty';

const MySoldProperty = () => {
    const {user, loading} =UserAuth();
    const {sellerSoldProperty, sellerSoldPropertyLength} =useSellerSoldProperty();
    console.log(sellerSoldPropertyLength);
    return (
        
          <div className="card shadow-md bg-base-100 px-4 py-10 justify-around items-center flex flex-col lg:flex-row">
                
          <div className="radial-progress text-rose-500" style={{"--value":"100", "--size": "4rem", "--thickness": "4px"}} role="progressbar"><FontAwesomeIcon className='text-xl bg-red-200  p-3 rounded-full' icon={faBuildingCircleCheck} /></div>

          <div className='ml-2'>
              <h2 className='text-xl font-semibold'>My Sold Propety</h2>
              <p className='text-lg font-semibold text-red-400 '>{sellerSoldPropertyLength}+</p>
          </div>
      </div>

    );
};

export default MySoldProperty;