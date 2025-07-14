"use client"
import React from 'react'
import { Radar} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Ticks,
  } from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

const benchmark={
    labels: ['Savings' , 'Investments' , 'Debt' , 'Income' , 'Expenses' , 'Credit Score'],
    datasets: [
        {
            label: "You",
            data: [80, 70, 60, 40, 50, 40],
            backgroundColor: "rgba(136, 132, 216, 0.6)",
            
        },
        {
            label: "Benchmark",
            data: [75, 100, 90, 50, 60, 60],
            backgroundColor: "rgba(130, 202, 157, 0.6)",

        }

    ]
}

const options={
    scales: {
        r: {
            beginAtZero: true,
            ticks: {
                backdropColor: "transparent"
            }
        }
    }
}


function RadarChart() {
  return (
    <div className='h-80 mt-4 p-5'>
        <Radar data={benchmark} options={{ ...options, responsive: true, maintainAspectRatio: false}}/>
    </div>
    
  )

}

export default RadarChart