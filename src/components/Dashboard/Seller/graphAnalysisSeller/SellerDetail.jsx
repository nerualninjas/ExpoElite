import Image from 'next/image';
import React from 'react';

const SellerDetail = () => {
    return (
        <div>
            <div className="card  bg-base-100 px-5 py-8 justify-around items-center flex flex-col lg:flex-row ">
                
                <div className="radial-progress text-rose-500" style={{"--value":"100", "--size": "6rem", "--thickness": "4px"}} role="progressbar"><Image width={400} height={400} src="https://i.ibb.co/DC2Ppvn/member2.png"  alt="image" /></div>

                <div className='mx-auto lg:ml-2 text-center'>
                    <h2 className='text-lg font-semibold'> Tahsin Tarannum Chowdhury</h2>
                    <p className='text-md font-semibold text-gray-600 '>chytahsin.2210@gmail.com</p>
                    <p className='text-md font-semibold text-red-400 '>Seller</p>
                </div>
            </div>
        </div>
    );
};

export default SellerDetail;