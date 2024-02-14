"use client";
import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
    {
        subject: 'Dhaka',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Chittagong',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Rongpur',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Bramonbaria',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Sylhet',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'Khulna',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

const SelledPropertyLocation = () => {
    return (
        <div className='bg-gray-100 shadow-md rounded-lg p-5' style={{  padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <RadarChart width={400} height={300} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar className='pt-5' name="Selled" dataKey="A" stroke="#E11D48" fill="#F989B0" fillOpacity={0.6} />
                <Radar name="Location" dataKey="B" stroke="#F43F5E" fill="#FECDD3" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </div>
    );
};

export default SelledPropertyLocation;
