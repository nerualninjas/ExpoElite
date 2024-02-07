"use client"
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [

  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F'];
const TotalProperty = () => {
  return (
    <div className='bg-[#D4E0EC] rounded-lg'>
      <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

      </PieChart>
    </div>
  );
};

export default TotalProperty;