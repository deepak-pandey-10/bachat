'use client'
import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'

const investment = [
    {
        id:'1',
        name: 'Apple Inc.',
        symbol: 'AAPL',
        amount: 150000,
        change: 2.5,
        sector: 'Technology'
    },
    {
        id:'2',
        name: 'Microsoft Corporation',
        symbol: 'MSFT',
        amount: 135000,
        change: -1.2,
        sector: 'Technology'
    },
    {
        id:'3',
        name: 'Amazon.com Inc.',
        symbol: 'AMZN',
        amount: 114000,
        change: 1.8,
        sector: 'Consumer Cyclical'
    },
    {
        id:'4',
        name: 'Tesla Inc.',
        symbol: 'TSLA',
        amount: 96000,
        change: -2.7,
        sector: 'Consumer Cyclical'
    },
    {
        id:'5',
        name: 'Alphabet Inc.',
        symbol: 'GOOGL',
        amount: 126000,
        change: 0.9,
        sector: 'Communication Services'
    },
    {
        id:'6',
        name: 'Johnson & Johnson',
        symbol: 'JNJ',
        amount: 108000,
        change: 0.5,
        sector: 'Healthcare'
    },
    {
        id:'7',
        name: 'JPMorgan Chase & Co.',
        symbol: 'JPM',
        amount: 117000,
        change: -0.8,
        sector: 'Financial Services'
    },
    {
        id:'8',
        name: 'Visa Inc.',
        symbol: 'V',
        amount: 99000,
        change: 1.2,
        sector: 'Financial Services'
    },
]

function SectorAnalysis() {
  return (
    <ResponsiveContainer width='100%' height={300} className='p-5 mt-4 mb-2'>
        <BarChart data={investment}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey='sector'/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey='amount' fill='#8884d8'/>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default SectorAnalysis