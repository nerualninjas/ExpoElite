"use client"
import useTotalProperty from '@/hooks/Propertys/useTotalProperty';
import useGetSoldProperty from '@/hooks/soldProperty/useGetSoldProperty';
import React from 'react';
import { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

  

const TotalPropertyVsTotalSell = () => {
    const {soldPropertyLength} =useGetSoldProperty();
    const { totalPropertyLength } = useTotalProperty();
    
const data = [
    {
      name: 'Sold Property',
      uv: soldPropertyLength,
      pv: 2400,
      stroke:'#E11D48',
      fill:'#F989B0',
     fillOpacity:'0.6'
    },
    {
      name: 'Total Property',
      uv: totalPropertyLength,
      pv: 4567,
      fill: '#F9DDE1',
      stroke:'#E11D48',
     fillOpacity:'0.8'
    },
    
  ];
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
    fill: '#E11D48'
  };

    return (


        <div className='  bg-[#F3F4F6] shadow-md rounded-lg p-5'>
              {/* <ResponsiveContainer width="100%" height="100%"> */}
        <RadialBarChart  width={400}
                 height={300} cx="30%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={40} data={data}>
          <RadialBar
            minAngle={20}
            label={{ position: 'insideStart', fill: '#F3F4F6' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={15} layout="vertical" verticalAlign="middle" wrapperStyle={style}  fill="#FECDD3"/>
        </RadialBarChart>
      {/* </ResponsiveContainer> */}
         
            {/* <AreaChart
                 width={500}
                 height={300}
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
                <Area type="monotone" dataKey="totalProperty" stackId="1" stroke="#F43F5E" fill="#FECDD3" strokeDasharray="5 5"  />
                <Area type="monotone" dataKey="totalSoldProperty" stackId="1" stroke="#E11D48" fill="#F989B0"  strokeDasharray="5 5"  />

            </AreaChart> */}
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default TotalPropertyVsTotalSell;


