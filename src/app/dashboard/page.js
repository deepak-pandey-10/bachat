import React from 'react'
import Sidebar from './components/sidebar'


function Dashboard() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='felx p-8'>
        <div className='bg-purple-100 h-30 w-65 rounded-xl text-zinc-900 p-4'>
          <div className='flex justify-between p-1'>
            <p className='font-bold text-sm '>Net Worth</p>
            <p>₹</p>
          </div>
          <h1 className='text-2xl font-bold'>₹13,45,000</h1>
          <p className='text-xs text-muted-foreground'>+5.2% from last quarter</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard