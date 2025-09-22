'use client'
import React from 'react'


function Profile() {
  return (
    <div>
        <div className='bg-purple-50 h-auto w-full p-5 rounded text-black mt-3 '>
            <h1 className='text-l ml-2 font-bold '>Profile Information</h1>
            <p className='text-xs text-muted-foreground ml-2'>Update your personal details here.</p>
            <div className='flex space-y-4 items-center bg-gray-100 h-20 w-20 rounded-full justify-center mt-10'>
                <h1 className='text-xl '>CN</h1>
            </div>

            <div className='grid gap-4 md:grid-cols-2 mt-4 ml-2'>
                <div className='space-y-2 mt-2'>
                    <label className='text-sm font-bold text-gray-700'>First Name</label><br></br>
                    <input className='border border-gray-300  mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm shadow' placeholder='Deepak'></input>
                </div>

                <div className='space-y-2 mt-2'>
                    <label className='text-sm font-bold text-gray-700'>Last Name</label><br></br>
                    <input className='border border-gray-300  mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm shadow' placeholder='Pandey'></input>
                </div>

                <div className='space-y-2 mt-2'>
                    <label className='text-sm font-bold text-gray-700'>Email</label><br></br>
                    <input className='border border-gray-300  mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm shadow' placeholder='vikash.kumar@example.com' type='email'></input>
                </div>

                <div className='space-y-2 mt-2'>
                    <label className='text-sm font-bold text-gray-700'>Phone Number</label><br></br>
                    <input className='border border-gray-300  mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm shadow' placeholder='+91(00000-00000)'></input>
                </div>
            </div>
            <div className='space-y-2 mt-4 mb-3 ml-2'>
                <label className='text-sm font-bold text-gray-700'>Bio</label><br></br>
                <input className='border border-gray-300  mt-1 w-full h-9 p-2 text-gray-600 rounded text-sm shadow' placeholder='Tell us about yourself'></input>
            </div>
        </div>

        
    </div>
    
  )
}

export default Profile