import React from 'react'
import {FaRegClock} from "react-icons/fa"
import { MdTrendingUp } from 'react-icons/md'
import {TbActivityHeartbeat} from 'react-icons/tb'

function Overview() {
  return (
        <div>
            <div className='flex flex-nowrap gap-4 sm:gap-4 lg:gap-6 overflow-auto'>
                <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
                <div className='flex justify-between p-1'>
                    <p className='font-bold text-sm '>Net Worth</p>
                    <p>₹</p>
                </div>
                <h1 className='text-2xl font-bold mt-1'>₹3,13,45,000</h1>
                <p className='text-xs text-muted-foreground'>+5.2% from last quarter</p>
                </div>


                <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
                <div className='flex justify-between p-1'>
                    <p className='font-bold text-sm '>Investment Returns</p>
                    <MdTrendingUp/>
                </div>
                <h1 className='text-2xl font-bold mt-1.5'>8.5%</h1>
                <p className='text-xs text-muted-foreground'>Annual return (YTD)</p>
                </div> 


                <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
                <div className='flex justify-between p-1'>
                    <p className='font-bold text-sm '>Debt-to-Income Ratio</p>
                    <TbActivityHeartbeat/>
                </div>
                <h1 className='text-2xl font-bold mt-1.5'>0.28</h1>
                <p className='text-xs text-muted-foreground'>Healthy range: below 0.36</p>
                </div>

                <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
                <div className='flex justify-between p-1'>
                    <p className='font-bold text-sm '>Financial Health Score</p>
                    <FaRegClock/>
                </div>
                <h1 className='text-2xl font-bold mt-2 .5'>82/100</h1>
                <p className='text-xs text-muted-foreground'>+3 points from last assessment</p>
                </div>

                </div>

      </div>

  )
}

export default Overview