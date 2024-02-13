"use client"
import React from 'react';
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    totalSoldProperty: 2400,
    totalProperty: 4200,

  },
  {
    name: 'Page B',
    totalSoldProperty: 1300,
    totalProperty: 3098,

  },
  {
    name: 'Page C',
    totalSoldProperty: 2000,
    totalProperty: 9800,

  },
  {
    name: 'Page D',
    totalSoldProperty: 2780,
    totalProperty: 3908,

  },
  {
    name: 'Page E',
    totalSoldProperty: 1890,
    totalProperty: 4800,

  },
  {
    name: 'Page F',
    totalSoldProperty: 2390,
    totalProperty: 3800,

  },
  {
    name: 'Page G',
    totalSoldProperty: 3490,
    totalProperty: 4300,

  },
];
const PropertyVsSold = () => {

  // const dataForChart = payments.map(payment => ({
  //     ...payment,
  //     monthYear: `${payment.month}-${payment.year}`, // Combine month and year
  //   }));
  return (


    <div className='w-full h-full bg-gray-100 shadow-md rounded-lg p-5'>
      {/* <ResponsiveContainer > */}
      <AreaChart 
         width={500}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        className='max-w-[550px]'
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="totalProperty" stackId="1" stroke="#F43F5E" fill="#FECDD3"  />
        <Area type="monotone" dataKey="totalSoldProperty" stackId="1" stroke="#E11D48" fill="#F989B0" />

      </AreaChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default PropertyVsSold;


