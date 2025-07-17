'use client'
import React, { act } from 'react'
import { ResponsiveContainer, Tooltip, Treemap } from 'recharts'

const Alldata = [
    {
        name: "Stocks",
        children: [
            {name: "Technology" , size: 4000},
            {name: "Healthcare" , size: 3000},
            {name: "Finance" , size: 2000},
            {name: "Consumer Goods" , size: 1000}
        ]
    },
    {
        name: "Bonds",
        children: [
            {name: "Government" , size: 3000},
            {name: "Corporate" , size: 2000},
            {name: "Municipal" , size: 1000}
        ]
    },
    {
        name: "Property",
        children: [
            {name: "Residential" , size: 2000},
            {name: "Commercial" , size: 1500}
        ]
    },
    {
        name: "Cash",
        children: [
            {name: "Savings" , size: 1000},
            {name: "Money Market" , size: 500}
        ]
    },

]

function TreeMap() {
  return (
    <ResponsiveContainer height={300} className="mt-2 p-5">
        <Treemap data={Alldata} dataKey='size' aspectRatio={4 / 3} stroke='#fff' fill='#8884d8'>
            <Tooltip content={
                <CustomeTooltip active={false} payload={[]} lable={""}/>
            }/>

        </Treemap>
        
    </ResponsiveContainer>
  )
}

const CustomeTooltip = ({
    active, payload, lable,
})=>{
    if (active && payload && payload.length){
        return(
            <div className='bg-white p-2 border border-gray-300 rounded shadow'>
                <p className='font-bold'>{`${payload[0].payload.name} : ₹${payload[0].value}`}</p>
            </div>
        )
    }
}

export default TreeMap