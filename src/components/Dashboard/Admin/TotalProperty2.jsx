"use client"
import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const TotalProperty2 = () => {
    return (
        <div>
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
                    <Label value="Total Property" position="center"/>
                </Pie>
            </PieChart>
        </div>
    );
};

export default TotalProperty2;