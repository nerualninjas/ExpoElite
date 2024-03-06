"use client"
import useSellerProperty from '@/hooks/Propertys/useSellerProperty';
import useSoldPropertyByMonth from '@/hooks/Seller/useSoldPropertyByMonth';
import { Tooltip } from '@nextui-org/react';
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const MySoldVsDate = () => {
  const {soldProperty}=useSoldPropertyByMonth();
    
  const data = soldProperty?.map(item => ({
    name: item?.monthYear,
    uv: item?.count,
  }));
    return (
        <div className='card p-3 bg-base-100 shadow-md'>
          


     
            <AreaChart width={500} height={450} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FDC9C9" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FECDD3" stopOpacity={0}/>
    </linearGradient>
    {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FF385D" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FAB0B6" stopOpacity={0}/>
    </linearGradient> */}
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#F989B0" fillOpacity={1} fill="url(#colorUv)" />
  {/* <Area type="monotone" dataKey="pv" stroke="#F989B0" fillOpacity={1} fill="url(#colorPv)" /> */}
</AreaChart>

        </div>
    );
};

export default MySoldVsDate;
