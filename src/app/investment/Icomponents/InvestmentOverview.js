import React from 'react'
import { MdWarning, MdTrendingUp } from 'react-icons/md'

function InvestmentOverview() {
  return (
    <div>
        <div className='flex flex-nowrap gap-4 sm:gap-4 lg:gap-6 overflow-auto'>
            <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
                <div className='flex justify-between p-1'>
                    <p className='font-bold text-sm '>Portfolio Value</p>
                    <p>₹</p>
                </div>
                <h1 className='text-2xl font-bold mt-1'>₹38,75,000</h1>
                <p className='text-xs text-gray-600 text-muted-foreground'>Updated real-time</p>
            </div>


            <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
            <div className='flex justify-between p-1'>
                <p className='font-bold text-sm '>ROI</p>
                <MdTrendingUp/>
            </div>
            <h1 className='text-2xl font-bold mt-1'>12.7%</h1>
            <p className='text-xs text-muted-foreground'>Return on Investment</p>
            </div> 


            <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
            <div className='flex justify-between p-1'>
                <p className='font-bold text-sm '>Risk Level</p>
                <MdWarning/>
            </div>
            <h1 className='text-2xl font-bold mt-1.5'>63%</h1>
            <p className='text-xs text-muted-foreground'>Moderate risk</p>
            </div>

            <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
            <div className='flex justify-between p-1'>
                <p className='font-bold text-sm '>Diversification Score</p>
                <MdTrendingUp/>
            </div>
            <h1 className='text-2xl font-bold mt-2 .5'>82%</h1>
            <p className='text-xs text-muted-foreground'>Well diversified portfol</p>
            </div>

        </div>

</div>
  )
}

export default InvestmentOverview