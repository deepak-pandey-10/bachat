import React from 'react'
import Sidebar from '../dashboard/components/sidebar'
import Woverview from './wcomponents/Woverview'
import SpendingCategories from './wcomponents/SpendingCategories'
import SpendingTrends from './wcomponents/SpendingTrends'
import WalletTransactions from './wcomponents/WalletTransactions'
import WalletfinancialGoals from './wcomponents/WalletfinancialGoals'

function Wallet() {
  return (
    <div className='flex flex-col sm:flex-row'>
      <Sidebar />
      <div className="sm:ml-64 mt-12 sm:mt-0 p-6 overflow-y-auto">
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-bold'>My Wallet</h1>
            <button className='text-sm font-semibold'>Export Financial Report</button>
          </div>
          <Woverview/>

          <div className='flex gap-5'>

            <div className='h-auto w-1/2  text-black p-4 mt-5 bg-purple-50 rounded-2xl  '>
              <h1 className='text-l ml-2 font-bold '>Spending by Category</h1>
              <p className='text-xs text-muted-foreground ml-2'>Breakdown of your monthly expenses</p>
              <SpendingCategories/>
            </div>
            

            <div className='h-auto w-1/2  text-black p-4 mt-5 bg-purple-50 rounded-2xl  '>
              <h1 className='text-l ml-2 font-bold '>Monthly Spending Trend</h1>
              <p className='text-xs text-muted-foreground ml-2'>Your spending over the last 6 months</p>
              <SpendingTrends/>
            </div>
          </div>
          <div className='bg-purple-50 h-auto w-full p-5 rounded text-black mt-5'>
                <h1 className='text-xl ml-2 font-bold '>Recent Transportations</h1>
                <p className='text-sm text-gray-500 text-muted-foreground ml-2'>Your financial activities for the past week</p>
                <WalletTransactions/>
          </div>
          <div className='bg-purple-50 h-auto w-full p-5 rounded text-black mt-5'>
                <h1 className='text-xl ml-2 font-bold '>Financial Goals</h1>
                <p className='text-sm text-gray-500 text-muted-foreground ml-2'>Track your progress towards your goals</p>
                <WalletfinancialGoals/>
          </div>
        </div>
      </div>
  )
}

export default Wallet