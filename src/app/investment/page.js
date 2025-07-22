import React from 'react'
import Sidebar from '../dashboard/components/sidebar'
import InvestmentOverview from './Icomponents/InvestmentOverview'
import PortfolioPerformance from './Icomponents/PortfolioPerformance'
import AssetAllocation from './Icomponents/AssetAllocation'
import SectorAnalysis from './Icomponents/SectorAnalysis'
import InvestmentHoldings from './Icomponents/InvestmentHoldings'


function Investment() {
  return (
    <div className='flex flex-col sm:flex-row'>
      <Sidebar />
      <div className="sm:ml-64 mt-12 sm:mt-0 p-6 overflow-y-auto">
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-bold'>Investment Portfolio</h1>
            <button className='text-sm font-semibold'>Generate Report</button>
          </div>
          <InvestmentOverview/>

          <div className='bg-purple-50 h-auto w-full p-5 rounded text-black mt-5'>
            <h1 className='text-l ml-2 font-bold '>Portfolio Performance</h1>
            <p className='text-xs text-muted-foreground ml-2'>Track your investments across different asset classes</p>
            <PortfolioPerformance/>
          </div>

          <div className='flex gap-5'>
            <div className='h-auto w-1/2  text-black p-4 mt-5 bg-purple-50 rounded-2xl  '>
              <h1 className='text-l ml-2 font-bold '>Asset Allocation</h1>
              <p className='text-xs text-muted-foreground ml-2'>Current distribution of your investments</p>
              <AssetAllocation/>
            </div>

            <div className='h-auto w-1/2  text-black p-4 mt-5 bg-purple-50 rounded-2xl  '>
              <h1 className='text-l ml-2 font-bold '>Sector Analysis</h1>
              <p className='text-xs text-muted-foreground ml-2'>Investment distribution across sectors</p>
              <SectorAnalysis/>
            </div>
          </div>

          <div className='bg-purple-50 h-auto w-full p-5 rounded text-black mt-5'>
                <h1 className='text-xl ml-2 font-bold '>Investment Holdings</h1>
                <p className='text-sm text-gray-500 text-muted-foreground ml-2'>Detailed view of your current investments</p>
                <InvestmentHoldings/>
          </div>

        </div>
      </div>
  )
}

export default Investment