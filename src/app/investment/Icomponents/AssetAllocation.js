'use client'
import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip , Legend} from 'recharts'

const assetdata =[
    {name: 'Stocks' , value: 400000 , color:"#0088FE"},
    {name: 'Bonds' , value: 300000 , color:"#00C49F"},
    {name: 'Real Estate' , value: 200000 , color:"#FFBB28"},
    {name: 'Commodities' , value: 100000 , color:"#FF8042"},
    {name: 'Crypto' , value: 50000 , color:"#8884D8"},
]

function AssetAllocation() {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie data={assetdata} cx='50%' cy="50%" labelLine={false} outerRadius={80} fill='#8884d8' dataKey='value'>
                {assetdata.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
            <Tooltip/>
            <Legend/>
        </PieChart>
    </ResponsiveContainer>
  )
}

export default AssetAllocation