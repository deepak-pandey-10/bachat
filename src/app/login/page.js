'use client'
import React from 'react'
import Link from 'next/link'

function Login() {
  return (
    <div className='p-20 flex align-center justify-center'>
        <div className="bg-zinc-800 w-135 h-auto shadow-lg shadow-gray-700 rounded-md">
            <h1 className='text-2xl font-extrabold mb-2 text-center text-rgb(30 41 59) mt-10'>Welcome Back</h1>
            <p className='mb-14 text-center text-rgb(71 85 105)'>Sign in to access your account</p>
            <form >
                <div className='mb-4'>
                    <label className='align-left ml-5 font-medium'>Email address</label><br></br>
                    <input className='ml-4 p-1.5 w-125 bg-zinc-700 border-2 border-gray-500 rounded-lg mt-1' type='email' placeholder=' ✉️  you@example.com'/>
                </div>
                <div>
                    <label className='align-left ml-5 font-medium'>Password</label><br></br>
                    <input className='ml-4 p-1.5 w-125 bg-zinc-700 border-2 border-gray-500 rounded-lg mt-1' type='password' placeholder=' 🔒 enter password'/>
                </div>
                <div className='mt-4 flex justify-between'>
                    <div className='items-center flex'>
                        <input type='checkbox' className='ml-5 mr-2'/>
                        <label className='text-sm mt-0'>Rememeber me</label>
                    </div>
                    <div>
                        <p className='text-sm text-emerald-600 pr-4'>Forget Password?</p>
                    </div>
                </div>
                <Link href="./dashboard">
                    <button type='submit' className='bg-emerald-600 text-white rounded-lg p-2 mt-14 w-125 ml-3'  href="./dashboard">Sign in</button>
                </Link>
                
            </form>
            <div className='flex text-center justify-center w-full mt-5 mb-5'>
                <hr/>
                <p className='text-sm bg-zinc-700 p-1 w-40 text-center font-stretch-70%'>OR CONTINUE WITH</p>
            </div>
            <div className='flex justify-around mb-15 mt-3'>
                <button className='w-30 h-7 bg-zinc-700 text-2xl text-center flex justify-center pb-3'> 𝕏</button>
                <button className='w-30 h-7 bg-zinc-700'>GitHub</button>
                <button className='w-30 h-7 bg-zinc-700'>Google</button>
            </div>

            <p className='text-sm text-center mt-10 mb-10'>Don't have an account? <Link className='text-emerald-600' href="./signup">Sign up now</Link></p>
            
        </div>
    </div>
  )
}

export default Login