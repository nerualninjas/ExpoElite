"use client"
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const TotalPropertyVsMyProperty = () => {
    const data = [
        { name: 'Group A', value: 500 },
        { name: 'Group B', value: 700 },
       
      ];
      
      const COLORS = ['#FECDD3', '#FF385D'];

      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      
    return (
        // <Area type="monotone" dataKey="totalProperty" stackId="1" stroke="#F43F5E" fill="#FECDD3" strokeDasharray="5 5"  />
        //         <Area type="monotone" dataKey="totalSoldProperty" stackId="1" stroke="#E11D48" fill="#F989B0"  strokeDasharray="5 5"  />
        <div>
             {/* <ResponsiveContainer width="100%" height="100%"> */}
        <PieChart   width={500} height={450} >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#FECDD3"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      {/* </ResponsiveContainer> */}
        </div>
    );
};

export default TotalPropertyVsMyProperty;

