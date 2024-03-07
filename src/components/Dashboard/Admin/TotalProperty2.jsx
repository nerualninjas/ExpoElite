"use client"
import useTotalProperty from '@/hooks/Propertys/useTotalProperty';
import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const data = [
    { name: 'Group A', value: 700 },
];
const COLORS = ['#FF385D'];


const TotalProperty2 = () => {

    const { totalPropertyLength } = useTotalProperty();

    return (
        <div className="p-6 rounded-md shadow-md flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-50 border-gray-200 ">
            <h4 className='text-sm text-center font-semibold'>Total Property</h4>
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
                    <Label value={totalPropertyLength} position="center" className='text-black text-sm font-bold' />
                </Pie>
            </PieChart>
        </div>
    );
};

export default TotalProperty2;