"use client"
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import usePropertyData from '@/hooks/Propertys/usePropertyData';
import Lottie from 'lottie-react';
import { DatePicker, TimePicker } from 'antd';
import Book_Appointment from "./Book_Appoinment_2.json"
import Image from 'next/image';
import React, { useState } from 'react';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Title2 from '../shared/Title/Title2';
import useNotification from '@/hooks/notifications/useNotificationCreate';
import { useRouter } from 'next/navigation';


const AppointmentForm = ({ propertyId }) => {
  const router = useRouter();
  const { notificationPost } = useNotification()
  const { user } = UserAuth();
  console.log(user);
  const { propertySingleData, isPending, refetch } = usePropertyData(propertyId);
  const { _id, propertyName, sellerImage, sellerName, image, email, location
  } = propertySingleData || {};

  const axiosSecure = useAxiosSecure();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const handleAppointment = async (e) => {
    e.preventDefault();

    try {
      // Get the user details
      const userEmail = user?.email;
      const userName = user?.displayName;
      const userPhoto = user?.photoURL


      const formattedDate = selectedDate?.format("DD-MM-YYYY");
      const formattedStartTime = selectedStartTime?.format("HH:mm");
      const formattedEndTime = selectedEndTime?.format("HH:mm");


      console.log('selectedDate', selectedDate);
      console.log('formattedDate', formattedDate);
      console.log('formattedStartTime', formattedStartTime);
      console.log('formattedEndTime', formattedEndTime);
      // Prepare the Appointment data
      const appointmentData = {
        userEmail: userEmail,
        userName: userName,
        userPhoto: userPhoto,
        sellerEmail: email,
        sellerName: sellerName,
        sellerPhoto: sellerImage,
        propertyName: propertyName,
        propertyLocation:location,
        propertyId: propertyId,
        appointmentDate: formattedDate,
        appointmentStartTime: formattedStartTime,
        appointmentEndTime: formattedEndTime,
        appointmentStatus: 'pending',
      };

      // Send the appointment data to the backend using the Post method
      const res = await axiosSecure.post(`/appointments`, appointmentData);

      console.log(res.data)
      if (res.data) {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Booked!',
          text: 'Your appointment has been successfully booked.',
        });
      }
     
      // Refetch  data after appointment
      refetch();
      //    notification add  start
      const data = {
        userEmail: email,
        notificationData: [{
          notificationText: "Appointment Booked",
          notificationPath:"/AppointmentManage",
          notifyUserPhoto: sellerImage,
          notificationStatus: "unread"
        }]
      }
      notificationPost(data)

      //notification end
      
      router.push("/");


      // Clear the date and time input field

      setSelectedDate('');
      setSelectedStartTime('');
      setSelectedEndTime('');
    }
     catch (error) {
      console.error('Error booking Appointment', error);
      

    }

  };
  return (
    <div className='min-h-screen mx-auto mt-5'>
      {/* <h1 className="text-2xl md:text-5xl font-bold text-center text-rose-600 py-10 ">
        Book Appointment
      </h1> */}
      <Title2 title="Book Appointment"/>
      <div>
        <div className=" mx-auto  ">
          <div className="mx-auto w-5/6 card lg:card-side bg-base-100 shadow-sm">
            <figure>  <Image width={200} height={200} src={image} alt="userPhoto" className='' /></figure>
            <div className="card-body">
              <h2 className="card-title">{propertyName}</h2>
              <p>{location}</p>
              <div className="card-actions flex justify-center lg:justify-end">
                <div className=""><div className='flex items-center'> <div><Image width={50} height={50} src={sellerImage} alt="sellerPhoto" className='rounded-full' /></div> <div> <span className='font-semibold'>Property Seller </span><br />  {sellerName}</div></div></div>
              </div>
            </div>
          </div>

          <div className='my-3 p-3 card mx-auto w-5/6 flex justify-ceenter items-center lg:card-side bg-base-100 shadow-sm'>
            <div className="w-full lg:w-1/2">
              <Lottie animationData={Book_Appointment} loop={true} />
            </div>
            <div className=" w-full lg:w-1/2">
              <form className="space-y-3" onSubmit={handleAppointment} >
                <div>

                  <div className='flex flex-col justify-center items-center'>
                    <div>  <Image width={70} height={70} src={user?.photoURL} alt="userPhoto" className='rounded-full' /></div>
                    <div> <p>{user?.displayName}</p></div>
                  </div>



                </div>
                <div className="space-y-1 text-sm">
                  <label for="date" className="block text-[#E11D48]">
                    Select Date
                  </label>
                  <DatePicker format="DD-MM-YYYY" onChange={(date) => setSelectedDate(date)} className="w-full px-4 py-3 rounded-md bg-rose-50" />
                </div>

                <div className="space-y-1 text-sm">
                  <label for="starttime" className="block text-[#E11D48]">
                    Select Start Time
                  </label>
                  {/* <TimePicker format="HH:mm"  onChange={(time1) => setSelectedStartTime(time1)}  className="w-full px-4 py-3 rounded-md bg-rose-50"/> */}

                  <TimePicker
                    format="HH:mm"
                    onChange={(time1) => {
                      console.log('selectedStartTime', time1);
                      setSelectedStartTime(time1);
                    }}
                    className="w-full px-4 py-3 rounded-md bg-rose-50"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label for="time" className="block text-[#E11D48]">
                    Select End Time
                  </label>
                  {/* <TimePicker format="HH:mm"  onChange={(time2) => setSelectedEndTime(time2)}  className="w-full px-4 py-3 rounded-md bg-rose-50"/> */}
                  <TimePicker
                    format="HH:mm"
                    onChange={(time2) => {
                      console.log('selectedEndTime', time2);
                      setSelectedEndTime(time2);
                    }}
                    className="w-full px-4 py-3 rounded-md bg-rose-50"
                  />


                </div>
                <button className="block w-full p-3 text-center rounded bg-[#E11D48] text-white">
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