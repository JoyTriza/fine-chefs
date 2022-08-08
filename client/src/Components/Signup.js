import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <form className='h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-around h-2/5 w-1/2'>
            <input type='first-name' placeholder='First-name...' className='placeholder:text-sm placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>   
            <input type='last-name' placeholder='Last-name...' className='placeholder:text-sm placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>         
            <input type='email' placeholder='Email...' className='placeholder:text-sm placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>      
            <input type='password' placeholder='Password...' className='placeholder:text-sm placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>
            <input type='Confirm password' placeholder='Confirm Password...' className='placeholder:text-sm placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>
            <div className='flex justify-end'>
                <div className='flex flex-col items-end'>
                  <button className='border-solid border-2 border-black px-2 hover:bg-red-500 w-3/4'>Signup</button>
                  <Link to='../login' className='hover:text-red-500'>Already have an account?</Link>
                </div>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Signup