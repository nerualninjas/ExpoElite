"use client"
import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const data = [
    { name: 'Group A', value: 450 },
    { name: 'Group B', value: 200 },

];
const COLORS = ['#FF385D', '#FBD5EB'];


const TotalUser = () => {
    return (
        <div className="p-6 rounded-md shadow-md flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-50 border-gray-200">
            <h4 className='text-sm text-center font-semibold'>Total User</h4>
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
                    <Label value="45%" position="center" className='text-black text-sm font-bold' />
                </Pie>
            </PieChart>
        </div>
    );
};

export default TotalUser;