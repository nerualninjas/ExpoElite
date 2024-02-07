"use client"
import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const data = [
    { name: 'Group A', value: 600 },
    { name: 'Group B', value: 300 },

];
const COLORS = ['#FF385D', '#FBD5EB'];

const TotalProperty2 = () => {
    return (
        <div className="p-6 rounded-md shadow-md flex flex-col justify-center items-center bg-gradient-to-r before:from-[#F989B0] via-[#e49797] to-[#ffffff] dark:bg-gray-900 dark:text-gray-50 border-[#F43F5E] border-2">
            <PieChart width={200} height={160} >
                <Pie
                    data={data}
                    cx={100}
                    cy={80}
                    innerRadius={50}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label value="Total Property" position="center" className='text-black text-sm font-bold' />
                </Pie>
            </PieChart>
        </div>
    );
};

export default TotalProperty2;