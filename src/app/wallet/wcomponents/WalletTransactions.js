import React from 'react'
import { FaCar ,FaDollarSign} from 'react-icons/fa';
import { HiOutlineCreditCard, HiOutlinePaperAirplane, HiOutlineShoppingBag, HiOutlineHome } from 'react-icons/hi';

const transactions = [
    {
        id: 1,
        date: '2025-07-19',
        description: 'Grocery Store',
        category: 'Food',
        amount: -2500
    },
    {
        id: 2,
        date: '2025-07-18',
        description: 'Monthly Rent',
        category: 'Housing',
        amount: -17000
    },
    {
        id: 3,
        date: '2025-07-17',
        description: 'Electric Bill',
        category: 'Utilities',
        amount: -1803
    },
    {
        id: 4,
        date: '2025-07-16',
        description: 'Gas Station',
        category: 'Transportation',
        amount: -650
    },
    {
        id: 5,
        date: '2025-07-15',
        description: 'Movie Theater',
        category: 'Entertainment',
        amount: -500
    },
]

const categoryIcons = {
    Groceries: HiOutlineShoppingBag,
    Rent: HiOutlineHome,
    Utilities: HiOutlineHome,
    Transportation: FaCar,
    Entertainment: HiOutlinePaperAirplane,
    HealthCare: HiOutlineCreditCard,
    Clothing: HiOutlineShoppingBag,
    Saving: FaDollarSign,
    Income: FaDollarSign
}

function WalletTransactions() {
  return (
    <div className='space-y-4 mt-4 p-4'>
        {transactions.map((transaction) => {
            const IconComponent=categoryIcons[transaction.category] || HiOutlineCreditCard;
            return <div key={transaction.id} className='flex items-center justify-between border-b border-gray-300 pb-2'>
                <div className='flex items-center space-x-4 '>
                    <div className='p-2 bg-gray-200 rounded-full'>
                        <IconComponent className='h-4 w-4'/>
                    </div>
                    <div>
                        <p className='font-medium'>{transaction.description}</p>
                        <p className='text-gray-500 text-sm'>{transaction.date}</p>
                    </div>
                </div>
                <div className='text-right'>
                    <p className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : '-'} ₹
                        {Math.abs(transaction.amount)}
                    </p>
                    <p className='text-sm text-gray-500'>
                        {transaction.category}
                    </p>
                </div>
            </div>
        })}
    </div>
  )
}

export default WalletTransactions