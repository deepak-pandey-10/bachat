'use client'
import React from 'react'

function Billing() {
  return (
    <div>
        <div className='bg-purple-50 h-auto w-full p-5 rounded text-black mt-3 '>
            <h1 className='text-l ml-2 font-bold '>Billing Information</h1>
            <p className='text-xs text-muted-foreground ml-2'>Manage your billing details and subscription</p>
            
            <div className='space-y-2 mt-10 mb-3 ml-2'>
                <label className='text-sm font-bold text-gray-700'>Current Plan</label><br></br>
                <p className='border-b border-gray-400 mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm font-bold'>Pro Plan (₹799.99/month)</p>
            </div>

            <div className='space-y-2 mt-6 ml-2'>
                <label className='text-sm font-bold text-gray-700'>Card Number</label><br></br>
                <input className='border border-gray-300  mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm shadow font-bold' placeholder='**** **** **** 1234'></input>
            </div>

            <div className='grid gap-4 md:grid-cols-2 mt-4 ml-2'>
                <div className='space-y-2 mt-2'>
                    <label className='text-sm font-bold text-gray-700'>Expiry Date</label><br></br>
                    <input className='border border-gray-300  mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm shadow' placeholder='MM/YY'></input>
                </div>

                <div className='space-y-2 mt-2'>
                    <label className='text-sm font-bold text-gray-700'>CVV</label><br></br>
                    <input className='border border-gray-300  mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm shadow' placeholder='***'></input>
                </div>
                
            </div>

            <div className='flex justify-between w-full mt-8 ml-2 pr-2 mb-3'>
                <button className='border-gray-300 border p-3 rounded text-sm text-gray-700 shadow'>Cancel Subscription</button>
                <button className='border-gray-300 border p-3 rounded text-sm text-gray-50 bg-gray-800 shadow font-bold'>Update Billing Info</button>
            </div>
        </div>

        
    </div>
  )
}

export default Billing