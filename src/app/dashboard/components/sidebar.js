'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaChartBar, FaWallet, FaChartLine, FaCog, FaBars, FaTimes } from 'react-icons/fa'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-zinc-800 p-2 rounded">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className='hidden sm:block w-64 bg-zinc-800 p-6 h-screen fixed left-0 top-0'>
        <div className='flex items-center mb-8'>
          <div className='w-8 h-8 bg-purple-500 rounded-full mr-3 text-center font-semibold text-2xl'>₹</div>
          <h1 className='text-2xl font-bold'>Bachat</h1>
        </div>
        <SidebarLinks />
      </div>

      <div className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-zinc-800 p-6 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex items-center mb-8'>
          <div className='w-8 h-8 bg-purple-500 rounded-full mr-3 text-center font-semibold text-2xl'>₹</div>
          <h1 className='text-2xl font-bold text-white'>Bachat</h1>
        </div>
        <SidebarLinks />
      </div>
    </>
  )
}

function SidebarLinks() {
  return (
    <nav>
      <Link href="./dashboard">
        <button className='text-sm flex items-center text-left pl-4 pt-1.5 h-9 w-full rounded text-white hover:bg-zinc-100 hover:text-black mb-3'>
          <FaChartBar className='mr-2 h-4 w-4 mt-0.5' /> Financial Health
        </button>
      </Link>
      <Link href="./wallet">
        <button className='text-sm flex items-center text-left pl-4 pt-1.5 h-9 w-full rounded text-white hover:bg-zinc-100 hover:text-black mb-3'>
          <FaWallet className='mr-2 h-4 w-4 mt-0.5' /> Wallet
        </button>
      </Link>
      <Link href="./investment">
        <button className='text-sm flex items-center text-left pl-4 pt-1.5 h-9 w-full rounded text-white hover:bg-zinc-100 hover:text-black mb-3'>
          <FaChartLine className='mr-2 h-4 w-4 mt-0.5' /> Investments
        </button>
      </Link>
      <Link href="./setting">
        <button className='text-sm flex items-center text-left pl-4 pt-1.5 h-9 w-full rounded text-white hover:bg-zinc-100 hover:text-black mb-3'>
          <FaCog className='mr-2 h-4 w-4 mt-0.5' /> Settings
        </button>
      </Link>
    </nav>
  )
}

export default Sidebar
