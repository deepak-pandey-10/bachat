'use client'
import React from 'react'
import Link from 'next/link'
import { FaTwitter,FaGithub, FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation'
function Login() {
    const router= useRouter()
    const handlingFormSubmit= (e)=>{
        e.preventDefault();
        router.push('/dashboard')

        
    }
  return (
    <div className='p-20 flex align-center justify-center'>
        <div className="bg-zinc-800 w-[40%] h-auto shadow-lg shadow-gray-700 rounded-md">
            <h1 className='text-2xl font-extrabold mb-2 text-center text-rgb(30 41 59) mt-10'>Welcome Back</h1>
            <p className='mb-14 text-center text-rgb(71 85 105)'>Sign in to access your account</p>
            <form  onSubmit={handlingFormSubmit}>
                <div className='mb-4'>
                    <label className='align-left ml-5 font-medium'>Email address</label><br></br>
                    <input className='ml-4 p-1.5 w-[92%] bg-zinc-700 border-2 border-gray-500 rounded-lg mt-1' type='email' placeholder=' ✉️  you@example.com' required/>
                </div>
                <div>
                    <label className='align-left ml-5 font-medium'>Password</label><br></br>
                    <input className='ml-4 p-1.5 w-[92%] bg-zinc-700 border-2 border-gray-500 rounded-lg mt-1' type='password' placeholder=' 🔒 enter password' required/>
                </div>
                <div className='mt-4 flex justify-between'>
                    <div className='items-center flex'>
                        <input type='checkbox' className='ml-5 mr-2' required/>
                        <label className='text-sm mt-0'>Rememeber me</label>
                    </div>
                    <div>
                        <p className='text-sm text-emerald-600 pr-4'>Forget Password?</p>
                    </div>
                </div>
                <button type='submit' className='bg-emerald-600 text-white rounded-lg p-2 mt-14 w-[92%] ml-3'  href="./dashboard">Sign in</button>

                
            </form>
            <div className='flex text-center justify-center w-full mt-5 mb-5'>
                <hr/>
                <p className='text-sm bg-zinc-700 p-1 w-[25%] text-center font-stretch-70%'>OR CONTINUE WITH</p>
            </div>
            <div className='flex justify-around mb-15 mt-3'>
                <FaTwitter className='w-[20%] h-8 bg-zinc-700 p-1'/>
                <FaGithub className='w-[20%] h-8 bg-zinc-700 p-1'/>
                <FaGoogle className='w-[20%] h-8 bg-zinc-700 p-1'/>
            </div>

            <p className='text-sm text-center mt-10 mb-10'>Dont have an account? <Link className='text-emerald-600' href="./signup">Sign up now</Link></p>
            
        </div>
    </div>
  )
}

export default Login