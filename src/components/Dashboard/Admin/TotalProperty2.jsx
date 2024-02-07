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
        <div className='bg-[#DDE1EC]'>
            <PieChart width={230} height={400} >
                <Pie
                    data={data}
                    cx={100}
                    cy={220}
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label value="Total Property" position="center" className='text-black' />
                </Pie>
            </PieChart>
        </div>
    );
};

export default TotalProperty2;