"use client"
import { Tooltip } from '@nextui-org/react';
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const MySoldVsUnsold = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
        
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
       
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
        },
        
      ];
      
    return (
        <div>
              {/* <ResponsiveContainer width="100%" height="100%"> */}
        {/* <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stackId="1"stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
       
        </AreaChart> */}
      {/* </ResponsiveContainer> */}


     
            <AreaChart width={500} height={450} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FDC9C9" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FECDD3" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FF385D" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FAB0B6" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#F989B0" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#F989B0" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

        </div>
    );
};

export default MySoldVsUnsold;