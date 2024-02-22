"use client"
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import usePropertyData from '@/hooks/Propertys/usePropertyData';
import Lottie from 'lottie-react';

import Book_Appointment from "./Book_Appoinment_2.json"
import Image from 'next/image';
import React from 'react';

const AppointmentForm = ({ propertyId }) => {
    const { user } = UserAuth();
    console.log(user);
    const { propertySingleData, isPending, refetch } = usePropertyData(propertyId);
    const { _id, propertyName, propertyCreatorName, propertyType, propertyCategory, price, image, bathrooms, bedrooms, livingRoom, propertyDetails, propertyCreator,month1,month6,month12
    } = propertySingleData || {};
    return (
        <div className='mx-auto'>
          
          <div>
        <div className=" mx-auto min-h-screen ">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-rose-600 py-10 ">
        Book Appointment
      </h1>
        <div className='mx-auto w-5/6 flex'>
        <div className="w-1/2">
          <Lottie animationData={Book_Appointment} loop={true} />
        </div>
        <div className="card w-1/2">
        <form
           
            novalidate=""
            action=""
            className="space-y-3"
          >
            <div>
      <p>Property ID: {propertyId}</p>
      <p>property Name: {propertyName}</p>
      <p>property Name: {propertyName}</p>
      <p>Seller Name: {propertyCreatorName}</p>
      <p>seller Email: {propertyCreator}</p>
      <p>{user?.displayName}</p>
     <p>{user?.email}</p> 
     <Image width={100} height={100} src={user?.photoURL} alt="userPhoto"  className='rounded-full'/>
            </div>
            <div className="space-y-1 text-sm">
              <label for="date" className="block text-rose-700">
               Select Date
              </label>
              <input
                type="email"
                name="email"
              
                id="email"
                placeholder="User Email"
                className="w-full px-4 py-3 rounded-md bg-rose-50"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block text-rose-700">
               Time
              </label>
              <input
                type="password"
                name="password"
                id="password"
              
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md bg-rose-50"
              />
              
            </div>
            <button className="block w-full p-3 text-center rounded bg-rose-600 text-white">
              Book Appointment
            </button>
          </form>
      

      {/* rest of your component */}
    </div>
        </div>
        </div>
        </div>
  
     
    </div>
        
    );
};

export default AppointmentForm;