import React from 'react'

function WalletfinancialGoals() {
  return (
    <div className='space-y-4 mt-4 p-4'>
        <div>
            <div className='flex justify-between mb-1'>
                <span className='font-medium text-sm'>Emergency Fund</span>
                <span className='font-medium text-sm'>70%</span>
            </div>
            <div className='w-full bg-gray-200 h-2.5 rounded-full dark:bg-gray-700'>
                <div className='bg-blue-600 h-2.5 rounded-full ' style={{width: '70%'}}>

                </div>
            </div>
        </div>

        <div>
            <div className='flex justify-between mb-1'>
                <span className='font-medium text-sm'>Vacation Savings</span>
                <span className='font-medium text-sm'>45%</span>
            </div>
            <div className='w-full bg-gray-200 h-2.5 rounded-full dark:bg-gray-700'>
                <div className='bg-green-600 h-2.5 rounded-full ' style={{width: '45%'}}>

                </div>
            </div>
        </div>

        <div>
            <div className='flex justify-between mb-1'>
                <span className='font-medium text-sm'>New Car</span>
                <span className='font-medium text-sm'>20%</span>
            </div>
            <div className='w-full bg-gray-200 h-2.5 rounded-full dark:bg-gray-700'>
                <div className='bg-yellow-600 h-2.5 rounded-full ' style={{width: '20%'}}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default WalletfinancialGoals