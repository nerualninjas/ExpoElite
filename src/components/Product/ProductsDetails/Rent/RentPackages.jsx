import usePropertyData from '@/hooks/Propertys/usePropertyData';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const RentPackages = ({ propertyId }) => {
    const { propertySingleData, isPending, refetch } = usePropertyData(
        propertyId
    );
    const { _id, month1, month6, month12 } = propertySingleData || {};
    const handlePackages = () => {
       
    }
    
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 -translate-y-32 md:mx-10'>
            <div className="max-w-xs rounded-md shadow-md bg-rose-200">

                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracki text-center">Package 1</h2>
                        <h2 className="text-xl font-semibold tracki text-center text-rose-700">1 Month at <span className='font-bold'>${month1}</span></h2>
                        <p className="mx-5">You can enjoy your home for 1 month </p>
                    </div>
                    <div className='flex justify-center items-center text-center'>
                        <Link href={`../payment/${_id}`} >
                            <button onClick={() => handlePackages({ _id, month1})} className="  rounded px-5 py-2 border-2 border-rose-600  text-lg  font-semibold text-rose-600 hover:text-white hover:bg-rose-600">Rent Now <FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-xs rounded-md shadow-md bg-rose-200">

                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracki text-center">Package 2</h2>
                        <h2 className="text-xl font-semibold tracki text-center text-rose-700">6 Months at <span className='font-bold'>${month6}</span> </h2>
                        <p className="mx-5">You can enjoy your home for 6 months </p>
                    </div>
                    <div className='flex justify-center items-center text-center'>
                        <Link href={`../payment/${_id}`}>
                            <button onClick={() => handlePackages({ _id, month6})} className="  rounded px-5 py-2 border-2 border-rose-600  text-lg  font-semibold text-rose-600 hover:text-white hover:bg-rose-600">Rent Now <FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-xs rounded-md shadow-md bg-rose-200">

                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracki text-center">Package 3</h2>
                        <h2 className="text-xl font-semibold tracki text-center text-rose-700"> 1 year at <span className='font-bold'>${month12}</span> </h2>
                        <p className="mx-5">You can enjoy your home for 1 year</p>
                    </div>
                    <div className='flex justify-center items-center text-center'>
                        <Link href={`../payment/${_id}`}>
                            <button onClick={() => handlePackages({ _id, month12})} className="  rounded px-5 py-2 border-2 border-rose-600  text-lg  font-semibold text-rose-600 hover:text-white hover:bg-rose-600">Rent Now <FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentPackages;