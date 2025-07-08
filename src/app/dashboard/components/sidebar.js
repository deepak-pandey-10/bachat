import Link from 'next/link'
import React from 'react'
import { FaChartBar , FaWallet ,FaChartLine ,FaCog} from 'react-icons/fa';



function Sidebar() {
  return (
    <div className='w-64 bg-zinc-800 p-6 h-screen '>
      <div className='flex items-center mb-8'>
        <div className='w-8 h-8 bg-purple-500 rounded-full mr-3'></div>
        <h1 className='text-2xl font-bold'>Bachat</h1>
      </div>

      <nav>
        <Link href="./dashboard">
          <button className='text-sm flex justify-start text-left pl-4 pt-1.5  h-9 w-full rounded bg-zinc-800 mb-3 hover:bg-zinc-100 hover:text-black'><FaChartBar className='mr-2 h-4 w-4 mt-0.5 '/> Financial Health</button>
        </Link>
        <Link href="./wallet">
          <button className='text-sm flex justify-start text-left pl-4 pt-1.5  h-9 w-full rounded bg-zinc-800 mb-3 hover:bg-zinc-100 hover:text-black'><FaWallet className='mr-2 h-4 w-4 mt-0.5 '/>wallet</button>
        </Link>
        <Link href="./investment">
          <button className='text-sm flex justify-start text-left pl-4 pt-1.5  h-9 w-full rounded bg-zinc-800 mb-3 hover:bg-zinc-100 hover:text-black'><FaChartLine className='mr-2 h-4 w-4 mt-0.5 '/>Investments</button>
        </Link>
        <Link href="./setting">
          <button className='text-sm flex justify-start text-left pl-4 pt-1.5  h-9 w-full rounded bg-zinc-800 mb-3 hover:bg-zinc-100 hover:text-black'><FaCog className='mr-2 h-4 w-4 mt-0.5 '/>Settings</button>
        </Link>
      </nav>
  
    </div>
  )
}

export default Sidebar