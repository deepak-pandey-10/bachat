import React from 'react'
import { LuArrowDownLeft , LuArrowUpRight  } from 'react-icons/lu'

const investments=[
    {
        id:'1',
        name: 'Apple Inc.',
        symbol: 'AAPL',
        amount: 150000,
        change: 2.5,
        sector: 'Technology'
    },
    {
        id:'2',
        name: 'Microsoft Corporation',
        symbol: 'MSFT',
        amount: 135000,
        change: -1.2,
        sector: 'Technology'
    },
    {
        id:'3',
        name: 'Amazon.com Inc.',
        symbol: 'AMZN',
        amount: 114000,
        change: 1.8,
        sector: 'Consumer Cyclical'
    },
    {
        id:'4',
        name: 'Tesla Inc.',
        symbol: 'TSLA',
        amount: 96000,
        change: -2.7,
        sector: 'Consumer Cyclical'
    },
    {
        id:'5',
        name: 'Alphabet Inc.',
        symbol: 'GOOGL',
        amount: 126000,
        change: 0.9,
        sector: 'Communication Services'
    },
    {
        id:'6',
        name: 'Johnson & Johnson',
        symbol: 'JNJ',
        amount: 108000,
        change: 0.5,
        sector: 'Healthcare'
    },
    {
        id:'7',
        name: 'JPMorgan Chase & Co.',
        symbol: 'JPM',
        amount: 117000,
        change: -0.8,
        sector: 'Financial Services'
    },
    {
        id:'8',
        name: 'Visa Inc.',
        symbol: 'V',
        amount: 99000,
        change: 1.2,
        sector: 'Financial Services'
    },
]
function InvestmentHoldings() {
  return (
    <div className='space-y-4 mt-4 p-4'>
        {investments.map((investment)=>(
            <div key={investment.id} className='flex items-center justify-between border-b border-gray-300 pb-2'>
                <div>
                    <p className='font-medium'>{investment.name}</p>
                    <p className='text-sm text-gray-500'>{investment.symbol} - {investment.sector}</p>
                </div>
                <div className='text-right'>
                    <p className='font-medium'>₹{investment.amount.toFixed(2)}</p>
                    <p className={`text-sm flex items-center ${investment.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {investment.change > 0? (<LuArrowUpRight className='w-4 h-4 mr-1'/>) : (<LuArrowDownLeft className='w-4 h-4 mr-1'/>)}
                        {Math.abs(investment.change)}%
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default InvestmentHoldings