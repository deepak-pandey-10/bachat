'use client'
import React from 'react'
import Sidebar from '../dashboard/components/sidebar'
import Profile from './Profile'
import Billing from './Billing'



function Setting() {
  const [isProfile,setProfile]= React.useState(true);
  
    
  return (
    <div className='flex'>
        <Sidebar/>
        <div className="sm:ml-64 mt-12 sm:mt-0 p-6 overflow-y-auto w-full pr-9">
          <div className='flex justify-between items-center  mb-6'>
            <h1 className='text-3xl font-bold '>Settings</h1>
            <button className='text-sm font-semibold '>Save Changes</button>
          </div>

          <div className='flex h-9 items-center justify-between rounded gap-1 bg-gray-100 p-1'>
            <button className='w-1/2 h-7 bg-gray-300 rounded font-bold text-gray-800' style={!isProfile?{backgroundColor:'#e5e7eb'}:{backgroundColor:'#d1d5db'}} onClick={()=>{setProfile(true)}}>Profile</button>
            <button className='w-1/2 h-7 bg-gray-200 rounded font-bold text-gray-800 ' style={!isProfile?{backgroundColor:'#d1d5db'}:{backgroundColor:'#e5e7eb'}} onClick={()=>{setProfile(false)}}>Billing</button>
          </div>
          
          {isProfile ? <Profile/> : <Billing/>}


        </div>
    </div>
    
  )
}

export default Setting