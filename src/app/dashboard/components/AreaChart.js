'use client';
import React from 'react'
import { AreaChart, Area ,ResponsiveContainer,XAxis, YAxis , CartesianGrid , Tooltip, Legend} from 'recharts'


const cashdata = [
    {month: "Jan" , income: 4000 , expenses: 2400 , savings: 1600},
    {month: "Feb" , income: 3500 , expenses: 2200 , savings: 1300},
    {month: "Mar" , income: 5000 , expenses: 2800 , savings: 2200},
    {month: "Apr" , income: 4200 , expenses: 2600 , savings: 1600},
    {month: "May" , income: 4800 , expenses: 2700 , savings: 2100},
    {month: "Jun" , income: 5200 , expenses: 3000 , savings: 2200}
]

function Areachart() {
  return (
    <ResponsiveContainer width='100%' height={400}>
        <AreaChart data={cashdata} className='p-5 mt-4 mb-2'>
            <YAxis/>
            <XAxis dataKey="month"/>
            <CartesianGrid strokeDasharray='3 3'/>
            <Legend/>
            <Tooltip/>
            <Area type='monotone' dataKey='income' stroke='#8884d8' fill='#8884d8' stackId='1'/>
            <Area type='monotone' dataKey='expenses' stroke='#82ca9d' fill='#82ca9d' stackId='1'/>
            <Area type='monotone' dataKey='savings' stroke='#ffc658' fill='#ffc658' stackId='1'/>
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default Areachart