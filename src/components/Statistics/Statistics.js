import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, Tooltip, XAxis, YAxis, Legend ,ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <h2 className='graph-title'>Chart of Total Question of quizzes</h2>
            <ResponsiveContainer width="90%" height={500}>
                <LineChart  className='graph' width={500} height={400} data={data}>
                    <Line type="monotone" dataKey='total' stroke="#82ca9d" />
                    <XAxis dataKey='name' />
                    <Tooltip/>
                    <YAxis />
                    <Legend />
                </LineChart>

            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;