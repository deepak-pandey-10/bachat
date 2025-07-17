'use client'
import React from 'react'
import { ResponsiveContainer,BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar ,Legend} from 'recharts'


const spendingdata= [
    {category: 'Housing', amount: 25000},
    {category: 'Transportation', amount: 8000},
    {category: 'Food', amount: 10000},
    {category: 'Utilities', amount: 5000},
    {category: 'Healthcare', amount: 6000},
    {category: 'Entertainment', amount: 4000},
    {category: 'Clothing', amount: 2000},
    {category: 'Savings', amount: 30000}

]
function SpendingCategories() {
  return (
    <ResponsiveContainer width='100%' height={375} className='p-4 mt-4'>
        <BarChart data={spendingdata} margin={{top:20 , right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='category'/>
            <YAxis/>
            <Tooltip formatter={(value)=>[`₹${value}`, 'Amount'] } labelStyle={{color: 'black'}} />
            <Legend/>
            <Bar dataKey="amount" fill="#8884d8"/>
            
        </BarChart>
    </ResponsiveContainer>
  )
}

export default SpendingCategories