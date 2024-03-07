"use client"
import useAllSellerData from '@/hooks/users/useAllSellerData';
import useAllUserData from '@/hooks/users/useAllUserData';
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const UserVsSeller2 = () => {

    const { AllSellerDataLength } = useAllSellerData();
    const { AllUserDataLength } = useAllUserData();


    const data = [
        {
            name: '',
            TotalSeller: AllSellerDataLength,
            TotalUser: AllUserDataLength,
        },

    ];

    return (
        <div className='w-full h-full bg-base-100 shadow-md rounded-lg p-5'>
            <ResponsiveContainer >
                {/* width="100%" height="100%" */}
                <BarChart
                    width={300}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}

                    className='max-w-[550px]'
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="TotalSeller" fill="#FFC0CB" activeBar={<Rectangle fill="pink" stroke="red" />} />
                    <Bar dataKey="TotalUser" fill="#FF385D" activeBar={<Rectangle fill="#FF385D" stroke="red" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserVsSeller2;