'use client'
import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const monthlyspend= [
    {month: 'Jan' , amount: 68000},
    {month: 'Feb' , amount: 71000},
    {month: 'Mar' , amount: 69500},
    {month: 'Apr' , amount: 72000},
    {month: 'May' , amount: 70500},
    {month: 'Jun' , amount: 70000},
]

function SpendingTrends() {
  return (
    <ResponsiveContainer width='100%' height={370} className='p-5 mt-3'>
        <LineChart data={monthlyspend}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='month'/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="amount" stroke='#8884d8'/>
        </LineChart>
    </ResponsiveContainer>
  )
}

export default SpendingTrends