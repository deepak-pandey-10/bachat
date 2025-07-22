'use client'
import React from 'react'
import { CartesianGrid, LineChart, ResponsiveContainer, Tooltip, XAxis, Legend, YAxis, Line } from 'recharts'

const performacedata=[
    {name:'Jan' , stocks:40000 , bonds: 24000, realstate: 24000},
    {name:'Feb' , stocks:30000 , bonds: 13980, realstate: 22100},
    {name:'Mar' , stocks:50000 , bonds: 38000, realstate: 22900},
    {name:'Apr' , stocks:48000 , bonds: 39000, realstate: 20000},
    {name:'May' , stocks:60000 , bonds: 48000, realstate: 21810},
    {name:'Jun' , stocks:58000 , bonds: 38000, realstate: 25000},
]

function PortfolioPerformance() {
  return (
    <ResponsiveContainer width='100%' height={300} className='p-5 mt-4 mb-3'>
        <LineChart data={performacedata}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name'/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type='monotone' dataKey='stocks' stroke='#0088FE'/>
            <Line type='monotone' dataKey='bonds' stroke='#00C49F'/>
            <Line type='monotone' dataKey='realstate' stroke='#FFBB28'/>
        </LineChart>
    </ResponsiveContainer>
  )
}

export default PortfolioPerformance