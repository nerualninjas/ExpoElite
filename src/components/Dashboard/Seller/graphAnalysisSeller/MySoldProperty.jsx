"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faBuildingCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import useSellerSoldProperty from '@/hooks/Propertys/useSellerSoldProperty';
import useGetSellerSoldProperty from '@/hooks/Seller/useGetSellerSoldProperty';

const MySoldProperty = () => {
    const {user, loading} =UserAuth();
    const { sellerSoldPropertylength} =useGetSellerSoldProperty();
    console.log(sellerSoldPropertylength);
    return (
        
          <div className="card shadow-md bg-base-100 px-4 py-10 justify-around items-center flex flex-col xl:flex-row">
                
          <div className="radial-progress text-rose-500" style={{"--value":"100", "--size": "4rem", "--thickness": "4px"}} role="progressbar"><FontAwesomeIcon className='text-xl bg-red-200  p-3 rounded-full' icon={faBuildingCircleCheck} /></div>

          <div className='ml-2'>
              <h2 className='text-lg font-semibold'>My Sold Propety</h2>
              <p className='text-xl font-semibold text-red-400 '>{sellerSoldPropertylength}+</p>
          </div>
      </div>

    );
};

export default MySoldProperty;