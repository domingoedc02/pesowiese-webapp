import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Label, ResponsiveContainer } from 'recharts';

const BasicDonutChart = () => {
    const data = [
        { name: 'Used', value: 10000 },
        { name: 'Remaining', value: 30000 },
    ];

    const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);
    const percentageUsed = ((data[0].value / totalValue) * 100).toFixed(0);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#8884d8"
                    paddingAngle={0}
                    labelLine={false}
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill || (index === 0 ? '#447541' : '#e0e0e0')} />
                    ))}
                    {/* Change the color of the value inside the donut */}
                    <Label
                        value={`${percentageUsed}%`} // Display the dynamic percentage
                        position="center"
                        fontSize={24}
                        fontWeight="bold"
                        fill="#d8d5d5" // Change the text color (e.g., red)
                    />
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '5px',
                    }}
                    labelStyle={{
                        color: '#333',
                        fontWeight: 'bold',
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default BasicDonutChart;
