'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Signup() {
    const router= useRouter()
    const handlingFormSubmit= (e)=>{
        e.preventDefault();
        router.push('/dashboard')
    }
  return (
    <div className='p-7 flex align-center justify-center'>
        <div className="bg-zinc-800 w-135 h-auto shadow-lg shadow-gray-700 rounded-md">
        <h1 className='text-2xl font-bold mb-2 text-center text-rgb(30 41 59) mt-10'>Create an account</h1>
        <p className='mb-8 text-center text-rgb(71 85 105)'>Start managing your finances today</p>

        <form onSubmit={handlingFormSubmit} >
                <div className='mb-4'>
                    <label className='align-left ml-5'>Full name</label><br></br>
                    <input className='ml-4 p-1.5 w-125 bg-zinc-700 border-2 border-gray-500 rounded-lg mt-1' type='text' placeholder='

👤  Enter your name' required/>
                </div>

                <div className='mb-4'>
                    <label className='align-left ml-5'>Email address</label><br></br>
                    <input className='ml-4 p-1.5 w-125 bg-zinc-700 border-2 border-gray-500 rounded-lg mt-1' type='email' placeholder=' ✉️  you@example.com' required/>
                </div>

                <div className='mb-4'>
                    <label className='align-left ml-5'>Password</label><br></br>
                    <input className='ml-4 p-1.5 w-125 bg-zinc-700 border-2 border-gray-500 rounded-lg mt-1' type='password' placeholder=' 🔒 enter password' required/>
                </div>

                <div>
                    <label className='align-left ml-5'>Confirm Password</label><br></br>
                    <input className='ml-4 p-1.5 w-125 bg-zinc-700 border-2 border-gray-500 rounded-lg mt-1' type='password' placeholder=' 🔒 confirm password' required/>
                </div>

                <div className='mt-4 flex justify-between'>
                    <div className='items-center flex'>
                        <input type='checkbox' className='ml-5 mr-2' required/>
                        <label className='text-sm mt-0'>I agree to the Terms of Service and Privacy Policy</label>
                    </div>
                
                </div>
                <button type='submit' className='bg-emerald-600 text-white rounded-lg p-2 mt-9 w-125 ml-3' href="./dashboard">Create account</button>

            </form>

            <div className='flex text-center justify-center w-full mt-5 mb-3'>
                <hr/>
                <p className='text-sm bg-zinc-700 p-1 w-40 text-center font-stretch-70%'>OR CONTINUE WITH</p>
            </div>
            <div className='flex justify-around mt-6'>
                <button className='w-30 h-7 bg-zinc-700 text-2xl text-center flex justify-center pb-3'> 𝕏</button>
                <button className='w-30 h-7 bg-zinc-700'>GitHub</button>
                <button className='w-30 h-7 bg-zinc-700'>Google</button>
            </div>

            <p className='text-sm text-center mt-10 mb-10'>Already have an account? <Link className='text-emerald-600' href="./login">Sign in</Link></p>
            
        </div>

        </div>
  )
}

export default Signup