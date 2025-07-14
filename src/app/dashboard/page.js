import React from 'react'
import Sidebar from './components/sidebar'
import Overview from '../dashboard/components/overview'
import RadarChart from './components/radarchart'
import Areachart from './components/AreaChart'
import TreeMap from './components/TreeMap'


function Dashboard() {
  return (
    <div className='flex flex-col sm:flex-row'>
      <Sidebar />
      <div className="sm:ml-64 mt-12 sm:mt-0 p-6 overflow-y-auto">
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-bold'>Financial Health</h1>
            <button className='text-sm font-semibold'>Generate Detailed Report</button>
          </div>
          <Overview />
          <div className='flex gap-5'>

            <div className='h-auto w-1/2  text-black p-4 mt-5 bg-purple-50 rounded-2xl  '>
              <h1 className='text-l ml-2 font-bold '>Financial Health Radar</h1>
              <p className='text-xs text-muted-foreground ml-2'>Comparison of your financial metrics against benchmark</p>
              <RadarChart/>
            </div>

            <div className='h-auto w-1/2  text-black p-4 mt-5 bg-purple-50 rounded-2xl  '>
              <h1 className='text-l ml-2 font-bold '>Asset Allocation Treemap</h1>
              <p className='text-xs text-muted-foreground ml-2'>Hierarchical view of your investment portfolio</p>
              <TreeMap/>
            </div>

          </div>
          <div className='bg-purple-50 h-auto w-full p-5 rounded text-black mt-5'>
            <h1 className='text-l ml-2 font-bold '>Cash Flow Stream</h1>
            <p className='text-xs text-muted-foreground ml-2'>Visualizing income, expenses and savings over time</p>
            <Areachart/>
          </div>
          
        </div>
      </div>
  )
}
export default Dashboard 