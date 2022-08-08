import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <form className='h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-around h-1/5 w-3/4 md:w-1/4'>
          <input type='email' placeholder='Email...' className='text-xs outline-none border-black border-2 bg-transparent px-2 py-1 placeholder:text-black'/>      
          <input type='password' placeholder='Password...' className='text-xs outline-none border-black border-2 bg-transparent px-2 py-1 placeholder:text-black'/>
          <div className='flex justify-end'>
            <div className='flex flex-col items-end'>
              <button className='border-solid border-2 px-2 hover:bg-red-500 w-1/2'>Log In</button>
              <Link to='../signup' className='hover:text-red-500'>Sign up for Fine-Chef's?</Link>
            </div>
          </div>
        </div>
      </form>
      

    </div>
  )
}

export default Login