import React from 'react'
import { FaWallet} from "react-icons/fa"


function Woverview() {
  return (
    <div>
        <div className='flex flex-nowrap gap-4 sm:gap-4 lg:gap-6 overflow-auto'>
            <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
            <div className='flex justify-between p-1'>
                <p className='font-bold text-sm '>Total Balance</p>
                <p>₹</p>
            </div>
            <h1 className='text-2xl font-bold mt-1'>₹4,23,000</h1>
            <p className='text-xs text-muted-foreground'>+2.5% from last month</p>
            </div>


            <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
            <div className='flex justify-between p-1'>
                <p className='font-bold text-sm '>Monthly Income</p>
                <p className='font-bold'>+</p>
            </div>
            <h1 className='text-2xl font-bold mt-1'>₹1,00,000</h1>
            <p className='text-xs text-muted-foreground'>Salary and other sources</p>
            </div> 


            <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
            <div className='flex justify-between p-1'>
                <p className='font-bold text-sm '>Monthly Expenses</p>
                <p className='font-bold'>-</p>
            </div>
            <h1 className='text-2xl font-bold mt-1.5'>₹70,000</h1>
            <p className='text-xs text-muted-foreground'>62% of monthly income</p>
            </div>

            <div className='bg-purple-100 h-30 w-70 rounded-xl text-zinc-900 p-4 shrink-0'>
            <div className='flex justify-between p-1'>
                <p className='font-bold text-sm '>Savings Rate</p>
                <FaWallet/>
            </div>
            <h1 className='text-2xl font-bold mt-2 .5'>30%</h1>
            <p className='text-xs text-muted-foreground'>₹30000 saved this month</p>
            </div>

        </div>

    </div>
  )
}

export default Woverview