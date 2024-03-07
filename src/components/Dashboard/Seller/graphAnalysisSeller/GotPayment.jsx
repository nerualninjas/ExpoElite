"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faDollarSign} from "@fortawesome/free-solid-svg-icons";
import useSellerPayment from '@/hooks/payments/useSellerPayment';

const GotPayment = () => {
    const {sellerPayment, refetch} = useSellerPayment();
    console.log('SellAmount',sellerPayment);
    // console.log('totalAmount',sellerPayment?.totalAmount);
    return (
        
        <div className="card shadow-md bg-base-100 px-4 py-10 justify-around items-center flex flex-col xl:flex-row">
                
          <div className="radial-progress text-rose-500" style={{"--value":"100", "--size": "4rem", "--thickness": "4px"}} role="progressbar"><FontAwesomeIcon className='text-xl bg-red-200 px-4 py-3 rounded-full' icon={faDollarSign} /></div>

          <div className='ml-2'>
              <h2 className='text-lg font-semibold'> My Total Earning</h2>
              <p className='text-xl font-semibold text-red-400 '> $ {sellerPayment?.totalAmount}</p>
          </div>
      </div>

    
    );
};

export default GotPayment;